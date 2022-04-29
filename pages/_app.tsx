import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { originalTheme } from "../src/themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={originalTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
