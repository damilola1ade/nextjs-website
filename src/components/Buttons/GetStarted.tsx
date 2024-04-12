import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FormData } from "../Form/components/FormData";

interface ButtonProps {
  w?: { base: string; md: string, lg?: string };
  bg?: string;
  bgGradient?: string;
  textColor: string;
  borderColor?: string;
  text: string;
  _hover?: { bg: string; textColor?: string; borderColor?: string };
}

export const GetStarted: React.FC<ButtonProps> = ({
  w,
  bg,
  bgGradient,
  textColor,
  borderColor,
  _hover,
  text,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        w={w}
        bgGradient={bgGradient}
        p={{ base: 5, md: 8 }}
        borderRadius={{ base: "lg", md: "xl" }}
        bg={bg}
        textColor={textColor}
        borderColor={borderColor}
        variant="outline"
        fontSize={{ base: "sm", md: "lg", xl: "lg" }}
        _hover={_hover}
      >
        {text}
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        isCentered
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent borderRadius="lg">
          <ModalHeader textAlign="center">
            Get in contact with our sales team
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={12} w={{ base: "100%", md: "95%" }} alignItems="center">
            <FormData />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
