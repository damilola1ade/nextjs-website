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
        mt={{ base: 0, md: 20 }}
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
            Large amounts of crypto assets are held in off-platform wallets or
            accounts, completely under utilised. In order to incentivise these
            assets to move to your platform, they must be identified and
            quantified.
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
            By linking users off-platform exchange and wallet accounts, your
            business can identify additional deposit opportunities and
            incentivize their onboarding to your business.
          </Text>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default ProblemSolution
