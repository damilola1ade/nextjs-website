/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Image, Spacer, Text, Stack } from "@chakra-ui/react";

const ProblemSolution = () => {
  return (
    <Flex
      mt={{ base: 16, lg: 12 }}
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
                <Image src='/questionmark.webp' w="28px" alt="question mark" loading="lazy"/>
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
            Obtaining a comprehensive picture of users' entire digital assets is
            often times difficult when they have accounts at multiple exchanges
            and DEFI wallets.
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
            Tensfer helps your users connect and sync their entire crypto
            portfolio across multiple platforms from your app.
          </Text>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default ProblemSolution
