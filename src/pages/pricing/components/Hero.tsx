import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/react";
import { HeroBox } from "@/components/HeroBox";

const Hero = () => {
  return (
    <Box w="100%" p={{ base: 4, lg: 0 }}>
      <Flex
        flexDirection="column"
        w="100%"
        maxW={{ base: "1024px", "2xl": "1320px" }}
        mx="auto"
      >
        <HeroBox>
          <Stack
            direction="column"
            spacing={8}
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Box maxW="800px">
              <Heading
                as="h1"
                size={{ sm: "lg", md: "2xl", xl: "3xl", "2xl": "4xl" }}
                fontWeight="medium"
                letterSpacing={{ sm: 0, md: -2 }}
              >
                Flexible pricing to meet your business needs.
              </Heading>
            </Box>

            <Text
              fontSize={{ sm: "md", md: "lg", lg: "2xl", "2xl": "3xl" }}
              w={{ base: "100%", lg: "60%" }}
              textAlign="center"
              fontWeight="medium"
              color="#313233"
            >
              We offer pricing options that fit people and organizations with
              different data needs. Find a plan that fits your business
            </Text>
          </Stack>
        </HeroBox>
      </Flex>
    </Box>
  );
};

export default Hero
