import { Container, Heading, keyframes, Stack, Text } from '@chakra-ui/react';
import { CharacterModel } from 'components/CharacterModel';
import { Layout } from 'components/layouts/Layout';

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
  return (
    <Layout>
      <Container mt={3}
      css={{
        animationName: `${fadeIn}`,
        animationDuration: '1s',
        animationFillMode: 'forwards',
      }}>
        <Heading as='h1' size='2xl' color='#42B2DF'>
          About
        </Heading>
        <CharacterModel />
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
