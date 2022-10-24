import { AspectRatio, Box, Image } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Box>
      <AspectRatio ratio={{ base: 9 / 16, lg: 16 / 9 }}>
        <Image src='keyvisual.png' alt='home' objectFit={'fill'} />
      </AspectRatio>
    </Box>
  );
};

export default Home;
