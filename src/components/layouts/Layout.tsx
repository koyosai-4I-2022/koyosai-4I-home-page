import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { DrawerMenu } from 'components/DrawerMenu';
import { FooterBody } from 'components/FooterBody';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
    <>
      <Box position={'relative'}>
        <Flex alignItems={'center'}>
          <Container
            onClick={() => {
              router.push('/');
            }}
            cursor='pointer'
          >
            <Image
              src='/infightLogoComplete.png'
              alt='Home Logo'
              objectFit={'scale-down'}
              width='300px'
              mt={'2'}
            />
          </Container>
          <Spacer />
          <Button
            right={0}
            bg={'blackAlpha.700'}
            _hover={{ background: 'blackAlpha.700' }}
            onClick={onOpen}
          >
            {!isOpen && <HamburgerIcon color={'white'} fontSize='3xl' />}
          </Button>
        </Flex>
        <DrawerMenu onClose={onClose} isOpen={isOpen} />
      </Box>
      <main>{children}</main>
      <FooterBody />
    </>
  );
};
