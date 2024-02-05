import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import ReactRefreshTypeScript from 'react-refresh-typescript';
import removeDataTestIdBabelPlugin from "./babel/removeDataTestIdBabelPlugin";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const { isScssModules } = options;
  const isDev = options.mode === 'development';
  const isProd = options.mode === 'production';

  const plugins = [];

  if (isProd) {
    plugins.push([
      removeDataTestIdBabelPlugin,
      {
        props: ['data-testid']
      }
    ])
  }

  const htmlLoader = {
    test: /\.(html)$/i,
    use: 'html-loader',
  }

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
      },
    },
  };

  const assetsLoader = {
    test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2)$/i,
    type: 'asset/resource',
  }

  const svgrLoader = {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'convertColors',
                  params: {
                    currentColor: true
                  }
                }
              ],
            },
          }
        }
        ],
    }

  const cssLoader = {
    test: /\.css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
    ],
  }

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      'sass-loader'
    ],
  }

  const tsLoader = {
    // ts-loader is used for both .ts and .tsx files
    // if you want to use babel-loader for .js and .jsx files
    test: /\.tsx?$|\.ts$/i,
    use: [
      {
        loader: 'ts-loader',
        options: {
          // live reload in development
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
          // type checking
          transpileOnly: isDev,
        }
      }
    ],
    exclude: /node_modules/,
  }

  const babelLoader = {
    test: /\.tsx?$/i,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          ['@babel/preset-react', { runtime: isDev ? 'automatic' : 'classic' }]

        ],
        plugins: plugins.length ? plugins : undefined,
      },
    },
    exclude: /node_modules/,
  }

  return [
    assetsLoader,
    htmlLoader,
    isScssModules ? sassLoader : cssLoader,
    // tsLoader,
    babelLoader,
    svgrLoader
  ]
}
