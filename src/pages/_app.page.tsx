import theme from "@/components/theme/theme";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import NextTopLoader from 'nextjs-toploader';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextTopLoader showSpinner={false} shadow="0" color="#002c8b" />
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}
