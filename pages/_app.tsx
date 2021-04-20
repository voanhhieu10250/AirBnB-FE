import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";

const theme = {
  breakpoints: {
    xl: "@media (min-width: 1128px)",
    l: "@media (min-width: 950px)",
    m: "@media (min-width: 744px)",
    sm: "@media (min-width: 375px)",
  },
  colors: {
    brandColor: "#ff385c",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
