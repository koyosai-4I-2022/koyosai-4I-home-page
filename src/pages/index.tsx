import {
  AspectRatio,
  Box,
  Container,
  Image,
  keyframes,
} from '@chakra-ui/react';
import { HamburgerMenu } from 'components/HambugerMenu';
import { Overlay } from 'components/Overlay';
import type { NextPage } from 'next';
import { MovieModal } from 'components/MovieModal';

const animateKeyFrames = keyframes`
  0% {opacity: 0;}
  10% {opacity: 0.1;}
  20% {opacity: 0.2;}
  30% {opacity: 0.3;}
  40% {opacity: 0.4;}
  50% {opacity: 0.5;}
  60% {opacity: 0.6;}
  70% {opacity: 0.7;}
  80% {opacity: 0.8;}
  90% {opacity: 0.9;}
  100% {opacity: 1;}
`;

const animation = `${animateKeyFrames} 3s ease-out`;

const Home: NextPage = () => {
  return (
    <Box position='relative'>
      <Overlay zIndex={3} position='absolute' />
      <HamburgerMenu position='fixed' zIndex={5} />
      <Container position='absolute' top={100} zIndex={4} right={0}>
        <Image
          src='infightLogoComplete2.png'
          alt='home'
          objectFit={'scale-down'}
          mr={0}
          animation={animation}
        />
      </Container>
      <AspectRatio ratio={{ base: 9 / 16, lg: 16 / 9 }}>
        <Image src='withmosaic.png' alt='home' objectFit={'fill'} />
      </AspectRatio>
      <MovieModal></MovieModal>
    </Box>
  );
};

export default Home;
