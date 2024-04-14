import { Flex, Button, Text } from "@chakra-ui/react";
import Link from "next/link";

export const NotFound = () => {
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
        404
      </Text>
      <Text fontSize={{ base: "md", md: "2xl" }} textAlign='center'>
        Unfortunaltely, we couldnt find the page you are looking for.
      </Text>
      <Button
        as={Link}
        href="/"
        bg="#002c8b"
        color="white"
        borderRadius="md"
        _hover={{ color: "white" }}
        fontSize={{ base: "xs", md: "md" }}
      >
        Go back to home
      </Button>
    </Flex>
  );
};
