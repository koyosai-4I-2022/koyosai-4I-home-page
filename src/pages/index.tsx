import { AspectRatio, Image } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <AspectRatio ratio={{ base: 9 / 16, lg: 16 / 7 }}>
      <Image src='keyvisual-high-quality.png' alt='home' objectFit={'fill'} />
    </AspectRatio>
  );
};

export default Home;
