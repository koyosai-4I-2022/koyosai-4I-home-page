import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { extendTheme } from '@chakra-ui/react';
import { Layout } from 'components/layouts/Layout';

const theme = extendTheme({
  components: {
    Text: {
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
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
