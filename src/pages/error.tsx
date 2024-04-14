import { Flex, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const Error = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <Flex
      p={4}
      mt={32}
      mb={32}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={8}
    >
      <Text fontSize="6xl" fontWeight="bold">
        Oops....
      </Text>
      <Text fontSize={{ base: "md", md: "2xl" }} textAlign="center">
        Seems like this page is taking too long to load
      </Text>
      <Button
        onClick={goBack}
        bg="#002c8b"
        color="white"
        borderRadius="md"
        _hover={{ color: "white" }}
        fontSize={{ base: "xs", md: "md" }}
      >
        Go back
      </Button>
    </Flex>
  );
};
