// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { extendTheme } from '@chakra-ui/react';

const colors = {
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.100',
      },
    },
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
