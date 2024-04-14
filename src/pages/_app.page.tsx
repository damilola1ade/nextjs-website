import theme from "@/components/theme/theme";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import SEO from '../../next-seo.config'
import NextTopLoader from 'nextjs-toploader';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo {...SEO} />
      <NextTopLoader showSpinner={false} shadow="0" color="#002c8b" />
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}
