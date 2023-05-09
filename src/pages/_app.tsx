import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
