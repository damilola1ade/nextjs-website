import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/react";
import { ViewCoverage } from "@/components/Buttons";
import { Slides1, Slides2 } from "./components";

export const Coverage = () => {
  return (
    <Box maxW={{ base: "1024px", "2xl": "1320px" }}>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        mb={12}
        alignItems="center"
      >
        <Box>
          <Stack flexDirection="column" spacing={8}>
            <Box>
              <Heading
                w={{ base: "100%", lg: "75%" }}
                size={{ sm: "lg", md: "2xl" }}
                fontWeight="medium"
                letterSpacing={-1}
              >
                Wide crypto coverage for crypto payments and account
                aggregation.
              </Heading>
            </Box>
            <Box w={{ sm: "100%", lg: "600px" }}>
              <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
                Let your users safely connect to leading exchanges 
                and wallets in your app, so they can make payments and have access to their entire porfolio.
              </Text>
            </Box>
            <Box>
              <ViewCoverage />
            </Box>
          </Stack>
        </Box>
        <Stack display={{ base: "none", lg: "flex" }} h="55vh" overflow="hidden" flexDirection="row" w='500px'>
          <Slides1 />
          <Slides2 />
        </Stack>
      </Flex>
    </Box>
  );
};
