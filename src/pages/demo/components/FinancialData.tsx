/* eslint-disable react/no-unescaped-entities */
//* eslint-disable @typescript-eslint/no-explicit-any */
import { Tensfer } from "@tensferhq/tensfer-js";
import { Box, Button, Icon, Stack, Text } from "@chakra-ui/react";
import { GiTwoCoins } from "react-icons/gi";


const FinancialData = () => {
  const openWidget = () => {
    Tensfer.linkWithOptions({
      publicKey: "test_pk_b8882e23d7085a63c1af",
      onSuccess: function (data: unknown) {
        console.log("Success!", data);
      },
      onError: function (data: unknown) {
        // an error occured
        console.log("Error!", data);
      },
      onClose: function () {
        // user closed widget
        console.log("Exited!");
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
        <Icon as={GiTwoCoins} w={12} h={12} color="green.500" />
        <Text
          fontSize={{ sm: "lg", md: "xl", xl: "3xl", "2xl": "3xl" }}
          fontWeight="bold"
          letterSpacing={{ sm: 0, md: -1 }}
        >
          Financial data
        </Text>
        <Text fontSize={{ sm: "sm", md: "md", lg: "lg" }}>
          Experience the Tensfer connect account linking flow to fetch
          customers' crypto transaction, balance, and portfolio data
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

export default FinancialData
