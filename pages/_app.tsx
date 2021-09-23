import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";

import theme from "../styles/Theme";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
