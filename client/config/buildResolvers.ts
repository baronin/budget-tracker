import {Configuration} from "mini-css-extract-plugin";
import {BuildPaths} from "./types/types";

export function buildResolvers(paths: BuildPaths): Configuration['resolve'] {
  return {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': paths.src ?? 'src',
    }
  }
}
