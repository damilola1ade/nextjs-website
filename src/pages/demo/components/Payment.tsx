// import Tensfer from "@tensferhq/tensfer-js";
import { Box, Button, Icon, Stack, Text } from "@chakra-ui/react";
import { SiContactlesspayment } from "react-icons/si";

declare global {
  interface Window {
    Tensfer: any;
  }
}

const Payment = () => {
  const openWidget = () => {
    window.Tensfer.linkWithOptions({
      publicKey: "live_pk_6df1b0b24c1a53963fab",
      onSuccess: function (data: any) {
        console.log("Success!", data);
      },
      onError: function (data: any) {
        // an error occured
        console.log("Error!", data);
      },
      onClose: function () {
        // user closed widget
        console.log("user closed widget");
      },
    });
  };
  return (
    <Box p={8} border="1px" borderRadius="xl" borderColor="gray.300">
      <Stack
        maxW="420px"
        align={{ base: "center", lg: "flex-start" }}
        textAlign={{ base: "center", lg: "left" }}
        spacing={6}
      >
        <Icon as={SiContactlesspayment} w={12} h={12} color="pink.500" />
        <Text
          fontSize={{ sm: "lg", md: "xl", xl: "3xl", "2xl": "3xl" }}
          fontWeight="bold"
          letterSpacing={{ sm: 0, md: -1 }}
        >
          Payments
        </Text>
        <Text fontSize={{ sm: "sm", md: "md", lg: "lg" }}>
          Experience the Tensfer payment flow; this demo is a real payment
          initiation and your account will be charged $5, one-time.
        </Text>
        <Button
          onClick={openWidget}
          w={{ base: "auto", lg: "200px" }}
          p={6}
          bg="#002c8b"
          _hover={{ bg: "#002c8b" }}
          color="white"
          borderRadius="lg"
        >
          Launch demo
        </Button>
      </Stack>
    </Box>
  );
};

export default Payment
