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

export const MovieModal = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  useEffect(() => {
    onToggle();
  }, []);
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom'>
      <ModalOverlay
        backgroundColor='blackAlpha.300'
        backdropFilter='blur(5px) hue-rotate(0deg)'
      />
      <ModalContent>
        <ModalHeader>紹介Movie</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MovieModal;
