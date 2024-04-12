import { Box, Flex, Image, Spacer, Text, Stack } from "@chakra-ui/react";

const ProblemSolution = () => {
  return (
    <Flex
      mt={{ base: 16, lg: 8 }}
      maxW={{ base: "1024px", "2xl": "1320px" }}
    >
      <Stack
        direction="column"
        spacing={{ base: 12, lg: 36 }}
        mt={{ base: 0, md: 12 }}
      >
        <Flex flexDirection={{ base: "column", lg: "row" }}>
          <Box>
            <Stack direction="row" spacing={2}>
              <Box>
                <Image src='/questionmark.webp' w="28px" alt="question mark" loading="lazy" />
              </Box>
              <Text
                fontSize={{ sm: "md", md: "lg", xl: "2xl" }}
                fontWeight="semibold"
              >
                THE PROBLEM
              </Text>
            </Stack>
          </Box>

          <Spacer />
          <Text
            mt={{ base: 6, md: 0 }}
            w={{ base: "100%", lg: "50%" }}
            fontSize={{ sm: "md", md: "lg", xl: "2xl" }}
          >
            Crypto transactions involve various types such as buying, selling,
            trading, mining, airdrops, staking, etc, each having different tax
            implications. Different tax regulations might apply depending on the
            nature of these transactions.
          </Text>
        </Flex>

        <Flex flexDirection={{ base: "column", lg: "row" }}>
          <Box>
            <Stack direction="row" spacing={2}>
              <Box>
                <Image src='/bulb.webp' w="36px" alt="light bulb" loading="lazy" />
              </Box>
              <Text
                fontSize={{ sm: "md", md: "lg", xl: "2xl" }}
                fontWeight="semibold"
              >
                THE SOLUTION
              </Text>
            </Stack>
          </Box>

          <Spacer />
          <Text
            mt={{ base: 6, md: 0 }}
            w={{ base: "100%", lg: "50%" }}
            fontSize={{ sm: "md", md: "lg", xl: "2xl" }}
          >
            Tensfer consolidates and categorizes cryptocurrency transactions
            from multiple exchanges and wallets with typically 9 months of
            history, making it easy for tax reporting purposes.
          </Text>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default ProblemSolution
