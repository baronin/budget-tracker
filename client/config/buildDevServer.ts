import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import {BuildOptions} from "./types/types";
import path from "path";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    open: true,
    static: path.resolve(__dirname, 'src'),
    hot: true,
    host: 'localhost',
    port: options.port ?? 8080,
    // если раздавать статику через nginx то надо делать проксирование на index.html
    historyApiFallback: true,
  };
}
