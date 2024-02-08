declare module "*.module.scss" {
  interface IClassName {
    [className: string]: string;
  }
  const classNames: IClassName;
  export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.eot";
declare module "*.ttf";
declare module "*.woff";
declare module "*.woff2";
declare module "*.html";
declare module "*.json";
declare module "*.md";

declare module '*.svg' {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __PLATFORM__: 'mobile' | 'desktop';

