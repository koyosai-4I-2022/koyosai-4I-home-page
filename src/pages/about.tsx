import {
  Container,
  Heading,
  keyframes,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import { CharacterModel } from 'components/CharacterModel';
import { Layout } from 'components/layouts/Layout';
import { useEffect, useState } from 'react';
import { getStorage, getDownloadURL, ref } from 'firebase/storage';
import { app } from 'lib/firebase';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutPage = () => {
  const [url, setUrl] = useState<string | null>(null);
  const firestorage = getStorage(app);
  const gsReference = ref(
    firestorage,
    'gs://koyosai-4i-home-page.appspot.com/Volinier-motion2.fbx',
  );

  useEffect(() => {
    getDownloadURL(gsReference).then(url => setUrl(url));
  }, []);

  if (!url) return <Spinner />;

  return (
    <Layout>
      <Container
        mt={3}
        css={{
          animationName: `${fadeIn}`,
          animationDuration: '1s',
          animationFillMode: 'forwards',
        }}
      >
        <Heading as='h1' size='2xl' color='#42B2DF'>
          About
        </Heading>
        <CharacterModel url={url} />
        <Stack fontWeight='bold' fontSize='2xl' mt={5} spacing={9}>
          <Text>INFightは4Iのチームが開発した最高のゲームです。</Text>
          <Text>
            舞台は2300年の超未来。プレイヤーはロボットを操縦して戦います。
          </Text>
          <Text>JoyCon を利用した直感的なゲームを楽しみましょう。</Text>
        </Stack>
      </Container>
    </Layout>
  );
};

export default AboutPage;
