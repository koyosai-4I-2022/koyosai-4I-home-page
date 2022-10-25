import { Box } from '@chakra-ui/react';

type Props = {
  zIndex?: number;
  position: 'absolute' | 'relative';
};

export const Overlay = ({ zIndex, position }: Props) => {
  return (
    <Box
      zIndex={zIndex}
      bgGradient={
        'linear(to-b, rgba(0,0,0,30) 0%, rgba(0,0,0,0) 87%, rgba(0,0,0,0) 100%)'
      }
      width='100%'
      height='100%'
      position={position}
      top={0}
    />
  );
};
