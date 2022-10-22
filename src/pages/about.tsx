import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import { CharacterModel } from 'components/CharacterModel';

const AboutPage = () => {
  return (
    <Container mt={3}>
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
  );
};

export default AboutPage;
