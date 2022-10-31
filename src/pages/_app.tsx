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

        <meta property='og:site_name' content='4Iこうよう祭学科展' />
        <meta property='og:title' content='INFight' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://koyosai-4i-home-page.versel.app/'
        />
        <meta property='og:image' content='/withmosaic.png' />
        <meta
          property='og:description'
          content='4Iこうよう祭学科展の紹介用ページです。ぜひ来校の際にはお立ち寄りください。'
        />
        <meta property='og:locale' content='ja_JP' />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
export default MyApp;
