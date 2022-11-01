import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Box,
  Button,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect } from 'react';

const MoviePage = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  useEffect(() => {
    onToggle();
  }, []);
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom'>
      <ModalOverlay backgroundColor='blackAlpha.100' />
      <ModalContent>
        <ModalHeader>紹介Movie</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MoviePage;
