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
            src='/orange_bg.svg'
            pos="absolute"
            w={{ sm: "sm", lg: "2000px", "2xl": "2500px" }}
            left={{ base: -48, lg: "-32rem", "2xl": "-40rem" }}
            alt="orange gradient"
          />
          <Box>
            <Heading
              as="h1"
              size={{ sm: "lg", md: "2xl", xl: "3xl", "2xl": "4xl" }}
              fontWeight="medium"
              letterSpacing={{ sm: 0, md: -2 }}
            >
              Crypto Lending
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
              Increase deposits and understand assets held off platform.
            </Text>
          </Box>

          <Box w={{ base: "full", md: "auto" }}>
            <Stack
              direction={{ base: "row", lg: "row" }}
              justifyContent="center"
            >
              <GetStarted
                bg={"#e98862"}
                textColor="white"
                _hover={{
                  bg: "white",
                  textColor: "#e98862",
                  borderColor: "#e98862",
                }}
                text="Get started"
              />
              <ScheduleADemo
                textColor={"#e98862"}
                borderColor={"#e98862"}
                _hover={{
                  bg: "#e98862",
                  textColor: "white",
                  borderColor: "#e98862",
                }}
                variant="outline"
                text="Start building"
              />
            </Stack>
          </Box>
        </Stack>
      </HeroBox>

      <Image
        src='/cryptolending_hero.webp'
        pos="absolute"
        mt={{ base: 72, lg: 60, "2xl": 64 }}
        w={{ base: "250px", md: "md", xl: "md", "2xl": "lg" }}
        right={{ base: 0, "2xl": 32 }}
        alt="crypto lending hero image"
        loading="eager"
      />
    </Flex>
  );
};

export default Hero
