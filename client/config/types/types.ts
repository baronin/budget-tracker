export type BuildMode = 'development' | 'production';
export type BuildPlatform = 'mobile' | 'desktop';

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  context?: string;
  src: string;
  core: string;

}
export interface BuildOptions {
  mode: BuildMode;
  platform?: BuildPlatform;
  port: number;
  paths: BuildPaths;
  isScssModules: boolean;
  analyzer?: boolean;
}
