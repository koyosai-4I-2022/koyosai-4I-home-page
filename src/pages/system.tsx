import {
  Container,
  Heading,
  Stack,
  Text,
  Image,
  Center,
  HStack,
} from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';
const SystemPage = () => {
  return (
    <Container mt={3}>
      <Heading size='2xl' color='#42B2DF'>
        System
      </Heading>
      <Stack mt={3} spacing={9}>
        <Center h='100%'>
          <Image src='system.jpg'></Image>
        </Center>
      </Stack>
      <Stack fontWeight='bold' fontSize='2xl' mt={5} spacing={9}>
        <Text borderBottom='2px' borderColor='gray.500'>
          ゲームクライアント
        </Text>
        <Text fontSize='lg'>
          ゲーム自体を開発している。プレイヤーの動作、内部判定、ゲームルールやUIなどを設計、開発する
        </Text>
        <Text>技術構成</Text>

        <HStack>
          <SmallAddIcon color='#42B2DF' />
          <Text>Unity 2020.3.36f1</Text>
        </HStack>
        <HStack>
          <SmallAddIcon color='#42B2DF' />
          <Text>C#</Text>
        </HStack>
        <HStack>
          <SmallAddIcon color='#42B2DF' />
          <Text>JoyconLib</Text>
        </HStack>
        <HStack>
          <SmallAddIcon color='#42B2DF' />
          <Text>Strix Cloud</Text>
        </HStack>
        <HStack>
          <SmallAddIcon color='#42B2DF' />
          <Text>JoyconLib</Text>
        </HStack>
        <HStack>
          <SmallAddIcon color='#42B2DF' />
          <Text>Adobe Mixamo</Text>
        </HStack>
        <Text borderBottom='2px' borderColor='gray.500'>
          スコアサーバ
        </Text>
        <Text fontSize='lg'>
          ゲームのスコアを記録するサーバとしてユーザとスコアを管理している。ゲームクライアントとWebページでランキングを確認できるようにするためにサーバが存在している
        </Text>
        <Text>技術構成</Text>

        <HStack>
          <SmallAddIcon color='#42B2DF' />
          <Text>Amazon ECS</Text>
        </HStack>
        <HStack>
          <SmallAddIcon color='#42B2DF' />
          <Text>FastAPI</Text>
        </HStack>
        <HStack>
          <SmallAddIcon color='#42B2DF' />
          <Text>PostgreSQL</Text>
        </HStack>
        <Text borderBottom='2px' borderColor='gray.500'>
          ホームページ
        </Text>
        <Text fontSize='lg'>
          個人ごとのランキングとスコアを確認したり、ゲームの内容を知ることができる。
        </Text>
        <Text>技術構成</Text>

        <HStack>
          <SmallAddIcon color='#42B2DF' />
          <Text>NEXT.js</Text>
        </HStack>
        <HStack>
          <SmallAddIcon color='#42B2DF' />
          <Text>Vercel</Text>
        </HStack>
        <HStack>
          <SmallAddIcon color='#42B2DF' />
          <Text>Chakra UI</Text>
        </HStack>
      </Stack>
    </Container>
  );
};
export default SystemPage;
