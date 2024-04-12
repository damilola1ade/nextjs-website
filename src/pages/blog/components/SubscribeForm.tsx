import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { BiBell } from "react-icons/bi";

const SubscribeForm = () => {
  return (
    <Box
      p={{ base: 8, lg: 20 }}
      bgGradient="linear(to right, #020e29 10%, #1544a9)"
      borderRadius="2xl"
      color="white"
    >
      <Stack spacing={6}>
        <Text fontSize={{ base: "md", lg: "3xl" }} fontWeight="bold">
          Like what you read?
        </Text>
        <Text fontSize={{ base: "xs", lg: "md" }}>
          Become a subscriber and receive notifications about blog posts,
          company events and announcements, products and more.
        </Text>
        <Flex gap={3} flexDirection={{ base: "column", lg: "row" }}>
          <Input
            borderRadius="md"
            bg="#061a45"
            height="50px"
            fontSize={{ base: "xs", lg: "md" }}
            placeholder="Enter email"
          />
          <Button
            p={6}
            rightIcon={<BiBell />}
            fontSize={{ base: "xs", lg: "md" }}
            borderRadius="md"
            bg="#ffffff"
            height="50px"
            textColor="#061a45"
            size="md"
          >
            Subscribe
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default SubscribeForm
