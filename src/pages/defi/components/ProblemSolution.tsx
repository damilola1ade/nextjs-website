import { Box, Flex, Image, Spacer, Text, Stack } from "@chakra-ui/react";

const ProblemSolution = () => {
  return (
    <Flex
      mt={{ base: 16, lg: 8, '2xl': 32 }}
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
            Decentralized Finance (DeFi) is growing swiftly, mostly on top of
            Ethereum. Yet, many of your users have non-Ethereum assets such as
            Bitcoin and many others.
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
            By linking existing wallets you can provide a complete picture of
            your users’ holdings across any asset and bring new users into the
            DeFi ecosystem.
          </Text>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default ProblemSolution
