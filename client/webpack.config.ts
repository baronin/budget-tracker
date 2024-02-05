import path from 'path';
import {buildWebpack} from "./config/buildWebpack";
import {BuildMode, BuildPlatform} from "./config/types/types";


interface Env {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
  platform?: BuildPlatform;
}

export default (env: Env) => {
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'src/pages/', 'index.html'),
    context: path.resolve(__dirname, 'src'),
    src: path.resolve(__dirname, 'src'),
    core: path.resolve(__dirname),
  }

  return buildWebpack({
    mode: env.mode ?? 'development',
    platform: env.platform ?? 'desktop',
    port: env.port ?? 8080,
    paths,
    isScssModules: true,
    analyzer: env.analyzer ?? false,
  });
}
