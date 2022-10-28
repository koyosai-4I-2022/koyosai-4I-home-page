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
import { Layout } from 'components/layouts/Layout';

type Props = {
  item: string;
};
const ListItem = ({ item }: Props) => {
  return (
    <HStack>
      <SmallAddIcon color='#42B2DF' />
      <Text>{item}</Text>
    </HStack>
  );
};

const SystemPage = () => {
  return (
    <Layout>
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
          <ListItem item='Unity 2020.3.36f1' />
          <ListItem item='C#' />
          <ListItem item='JoyconLib' />
          <ListItem item='Strix Cloud' />
          <ListItem item='Adobe Mixamo' />

          <Text borderBottom='2px' borderColor='gray.500'>
            スコアサーバ
          </Text>
          <Text fontSize='lg'>
            ゲームのスコアを記録するサーバとしてユーザとスコアを管理している。ゲームクライアントとWebページでランキングを確認できるようにするためにサーバが存在している
          </Text>
          <Text>技術構成</Text>
          <ListItem item='Amazon ECS' />
          <ListItem item='FastAPI' />
          <ListItem item='PostgreSQL' />
          <Text borderBottom='2px' borderColor='gray.500'>
            ホームページ
          </Text>
          <Text fontSize='lg'>
            個人ごとのランキングとスコアを確認したり、ゲームの内容を知ることができる。
          </Text>
          <Text>技術構成</Text>
          <ListItem item='NEXT.js' />
          <ListItem item='Vercel' />
          <ListItem item='Chakra UI' />
        </Stack>
      </Container>
    </Layout>
  );
};
export default SystemPage;
