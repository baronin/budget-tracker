import path from "path";
import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {buildStats} from "./buildStats";

// types
import {BuildOptions} from "./types/types";


export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  const isDev = options.mode === 'development';
  const evalSourceMap = isDev ? 'eval-cheap-module-source-map' : 'eval';

 return {
   mode: mode ?? 'development',
   context: paths.context ?? path.join(__dirname, './src'),
   entry: paths.entry ?? path.resolve(__dirname, 'src', 'index.tsx'),
   output: {
     path: paths.output ?? path.resolve(__dirname, 'build'),
     filename: 'js/[name].[contenthash].js',
     clean: true,
     chunkFilename: 'js/[name].[chunkhash].js',
   },
   devtool: evalSourceMap,
   plugins: buildPlugins(options),
   module: {
     rules: buildLoaders(options),
   },
   resolve: buildResolvers(paths),
   devServer: isDev ? buildDevServer(options) : undefined,
   stats: buildStats(),
 };
}
