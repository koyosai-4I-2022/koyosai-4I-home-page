import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  AspectRatio,
} from '@chakra-ui/react';
import { useEffect } from 'react';

export const MovieModal = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  useEffect(() => {
    if (sessionStorage.getItem('access') == null) {
      sessionStorage.setItem('access', 'false');
    }
    if (sessionStorage.getItem('access') == 'false') {
      onToggle();
      sessionStorage.setItem('access', 'true');
    }
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset='slideInBottom'
      isCentered
    >
      <ModalOverlay
        backgroundColor='rgba(0,0,0,0)'
        backdropFilter='blur(5px) hue-rotate(0deg)'
      />
      <ModalContent backgroundColor='gray.600' width='85%'>
        <ModalHeader color='white'>紹介Movie</ModalHeader>
        <ModalCloseButton color='white' />
        <ModalBody>
          <AspectRatio maxW='560px' ratio={1}>
            <iframe
              title='mv'
              src='https://www.youtube.com/embed/wUZJdsbCWj8'
              allowFullScreen
            />
          </AspectRatio>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MovieModal;
