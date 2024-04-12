import { Box, Image, Heading, Text, Stack, Flex } from "@chakra-ui/react";
import { GetStarted, ScheduleADemo } from "@/components/Buttons";

import { HeroBox } from "@/components/HeroBox";

const Hero = () => {
  return (
    <Flex maxW={{ base: "1024px", "2xl": "1320px" }}>
      <HeroBox>
        <Stack
          mb={32}
          direction="column"
          spacing={6}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            display={{ base: "none", lg: "flex" }}
            src='/teal_bg.svg'
            pos="absolute"
            w={{ sm: "sm", lg: "2000px", "2xl": "2500px" }}
            left={{ base: -48, lg: "-40rem", "2xl": "-50rem" }}
            alt="blue gradient"
          />
          <Box>
            <Heading
              as="h1"
              size={{ sm: "lg", md: "2xl", xl: "3xl", "2xl": "4xl" }}
              fontWeight="medium"
              letterSpacing={{ sm: 0, md: -2 }}
            >
              Personal Finance
            </Heading>
          </Box>

          <Box>
            <Text
              fontSize={{ sm: "md", md: "lg", lg: "2xl", "2xl": "3xl" }}
              w="99%"
              textAlign="center"
              fontWeight="medium"
              color="#313233"
            >
              Help your users track their entire digital assets portfolio.
            </Text>
          </Box>

          <Box w={{ base: "full", lg: "auto" }}>
            <Stack
              direction={{ base: "row", lg: "row" }}
              justifyContent="center"
            >
              <GetStarted
                bg={"#1cacd8"}
                textColor="white"
                _hover={{
                  bg: "white",
                  textColor: "#1cacd8",
                  borderColor: "#1cacd8",
                }}
                text="Get started"
              />
              <ScheduleADemo
                textColor={"#1cacd8"}
                borderColor={"#1cacd8"}
                _hover={{
                  bg: "#1cacd8",
                  textColor: "white",
                  borderColor: "#1cacd8",
                }}
                variant="outline"
                text="Start building"
              />
            </Stack>
          </Box>
        </Stack>
      </HeroBox>

      <Image
        src='/personal_finance.webp'
        pos="absolute"
        mt={{ base: 72, lg: 64, "2xl": 64 }}
        w={{ base: "200px", md: "xs", xl: "sm", "2xl": "md" }}
        right={{ base: 12, lg: "24", "2xl": 56 }}
        alt="personal finance hero images"
        loading="eager"
      />
    </Flex>
  );
};

export default Hero
