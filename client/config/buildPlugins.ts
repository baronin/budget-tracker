import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin, {Configuration} from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

// types
import {BuildOptions} from "./types/types";
import CopyPlugin from "copy-webpack-plugin";

export function buildPlugins({mode, paths, analyzer, platform}: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const htmlPlugin = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: paths.html ?? path.resolve(__dirname, 'src/pages/', 'index.html'),
    favicon: path.resolve(__dirname, '../src/assets/', 'favicon.ico'),
  });

  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  });

  const progressPlugin = new webpack.ProgressPlugin();
  const plugins: Configuration['plugins'] = [
    htmlPlugin,
    new webpack.DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
    }),
  ];

  if (isDev) {
    // Check types in a separate process
    plugins.push(new ForkTsCheckerWebpackPlugin({
      async: false,
      typescript: {
        configFile: path.resolve(paths.core, './tsconfig.json')
      },
    }));
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(progressPlugin);
  }

  if (isProd) {
    plugins.push(miniCssExtractPlugin);
    plugins.push(new CopyPlugin({
      patterns: [
        { from: path.resolve(paths.src, 'locales'), to: path.resolve(paths.output, 'locales') },
      ],
    }));
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}
