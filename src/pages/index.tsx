import { AspectRatio, Box, Container, Image } from '@chakra-ui/react';
import { HamburgerMenu } from 'components/HambugerMenu';
import { Overlay } from 'components/Overlay';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Box position='relative'>
      <Overlay zIndex={3} position='absolute' />
      <HamburgerMenu position='fixed' zIndex={5} />
      <Container position='absolute' top={150} zIndex={4} right={0}>
        <Image
          src='infightLogoComplete.png'
          alt='home'
          objectFit={'scale-down'}
          mr={0}
        />
      </Container>
      <AspectRatio ratio={{ base: 9 / 16, lg: 16 / 9 }}>
        <Image src='keyvisual-high-quality.png' alt='home' objectFit={'fill'} />
      </AspectRatio>
    </Box>
  );
};

export default Home;
