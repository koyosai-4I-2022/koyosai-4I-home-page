import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { extendTheme } from '@chakra-ui/react';
import Head from 'next/head';

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        color: 'white',
      },
      colors: {},
    },
    Heading: {
      baseStyle: {
        color: 'white',
      },
      colors: {},
    },
  },
  styles: {
    global: () => ({
      body: {
        bg: 'black',
      },
    }),
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/android-icon-192x192.png' />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
export default MyApp;
