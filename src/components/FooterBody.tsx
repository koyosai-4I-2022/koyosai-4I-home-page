import { Box, Text, Center, keyframes } from '@chakra-ui/react';

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
export const FooterBody = () => {
  return (
    <Box
      h={100}
      fontWeight={'bold'}
      css={{
        animationName: `${fadeIn}`,
        animationDuration: '1s',
        animationFillMode: 'forwards',
      }}
    >
      <Center h='100%'>
        <Text>&copy;koyosai-4I-2022</Text>
      </Center>
    </Box>
  );
};
