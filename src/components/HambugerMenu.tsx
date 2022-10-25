import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import { DrawerMenu } from './DrawerMenu';

type Props = {
  position?: 'absolute' | 'relative' | 'fixed';
  zIndex?: number;
};

export const HamburgerMenu = ({ position, zIndex }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box position={position} zIndex={zIndex} right={0}>
      <Button
        bgColor={'rgba(0,0,0,0)'}
        _hover={{ background: 'rgba(0,0,0,0)' }}
        color={'white'}
        onClick={onOpen}
      >
        <HamburgerIcon fontSize={'3xl'} />
      </Button>
      <DrawerMenu isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
