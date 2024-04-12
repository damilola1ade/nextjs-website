import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import { Aggregation, CryptoPayments } from "./Cards";

export const BlueCards = () => {
  return (
    <Stack flexDirection="column" spacing={{base: 4, md: 8}}>
      <Box>
        <Heading
          w={{ base: "100%", lg: "76%", "2xl": "60%" }}
          size={{ sm: "lg", md: "2xl" }}
          fontWeight="medium"
          letterSpacing={-1}
        >
          Our products
        </Heading>
      </Box>

      <Box w={{ sm: "100%", lg: "700px" }}>
        <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
          Connect crypto wallets, understand user holdings and move money
        </Text>
      </Box>
      <CryptoPayments />
      <Aggregation />
    </Stack>
  );
};
