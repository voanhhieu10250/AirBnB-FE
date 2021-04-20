import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      xl: string;
      l: string;
      m: string;
      sm: string;
    };
    colors: {
      brandColor: string;
    };
  }
}
