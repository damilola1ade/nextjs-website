/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

import { GetStarted } from "@/components/Buttons";

export const AboveFooter = () => {
  return (
    <Box bg="#ddf4ff">
      <Box
        p={{ base: 4, lg: 0 }}
        backgroundImage='/cardsBg.svg'
        bgSize="940px"
        bgRepeat="no-repeat"
      >
        <Flex
          flexDirection="column"
          w="100%"
          pt={{ base: 12, lg: 12 }}
          maxW={{ base: "1024px", "2xl": "1320px" }}
          mx="auto"
        >
          <Stack flexDirection="column" spacing={8}>
            <Box>
              <Heading
                w="100%"
                size={{ sm: "lg", md: "2xl" }}
                fontWeight="semibold"
                letterSpacing={-1}
              >
                Now let's talk about you
              </Heading>
            </Box>
            <Box w={{ sm: "100%", lg: "500px" }}>
              <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
                Tell us more about your business and the specific challenges
                you’re facing. We’ll help you build with Tensfer.
              </Text>
            </Box>

            <Box>
              <GetStarted
                bg="#002c8a"
                textColor={"white"}
                text={"Get started for free"}
                _hover={{ bg: "002c8a", textColor: "white" }}
              />
            </Box>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};
