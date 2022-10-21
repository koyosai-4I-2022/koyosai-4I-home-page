import { CloseIcon, HamburgerIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box position={'relative'}>
        <Flex alignItems={'center'}>
          <Container>
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
        <Drawer onClose={onClose} isOpen={isOpen} size='full'>
          <DrawerOverlay />
          <DrawerContent bgColor={'black'}>
            <Button
              position={'absolute'}
              right={0}
              bg={'blackAlpha.700'}
              _hover={{ background: 'blackAlpha.700' }}
              onClick={onClose}
            >
              {isOpen && <CloseIcon color={'white'} fontSize='xl' />}
            </Button>
            <DrawerBody>
              <Container
                fontWeight={'bold'}
                fontSize='3xl'
                color={'white'}
                mt='10%'
              >
                <List spacing={10}>
                  <ListItem>
                    <Link href='/' passHref>
                      <a onClick={onClose}>
                        <Box>
                          <ListIcon as={MinusIcon} color='#6370EB' />
                          Home
                        </Box>
                      </a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href='/about' passHref>
                      <a onClick={onClose}>
                        <Box>
                          <ListIcon as={MinusIcon} color='#6370EB' />
                          About
                        </Box>
                      </a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href='/ranking' passHref>
                      <a onClick={onClose}>
                        <Box>
                          <ListIcon as={MinusIcon} color='#6370EB' />
                          Play Score
                        </Box>
                      </a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href='/ranking' passHref>
                      <a onClick={onClose}>
                        <Box>
                          <ListIcon as={MinusIcon} color='#6370EB' />
                          System
                        </Box>
                      </a>
                    </Link>
                  </ListItem>
                </List>
              </Container>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      <main>{children}</main>
    </>
  );
};
