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
            src='/green_bg.svg'
            pos="absolute"
            w={{ sm: "sm", lg: "2000px", "2xl": "2500px" }}
            left={{ base: -48, lg: "-32rem", "2xl": "-40rem" }}
            alt="green gradient"
          />
          <Box>
            <Heading
              as="h1"
              size={{ sm: "lg", md: "2xl", xl: "3xl", "2xl": "4xl" }}
              fontWeight="medium"
              letterSpacing={{ sm: 0, md: -2 }}
            >
              Decentralized Finance (DeFi)
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
              Grow with more assets and more value to your users.
            </Text>
          </Box>

          <Box w={{ base: "full", md: "auto" }}>
            <Stack
              direction={{ base: "row", lg: "row" }}
              justifyContent="center"
            >
              <GetStarted
                bg={"#0e938b"}
                textColor="white"
                _hover={{
                  bg: "white",
                  textColor: "#0e938b",
                  borderColor: "#0e938b",
                }}
                text="Get started"
              />
              <ScheduleADemo
                textColor={"#0e938b"}
                borderColor={"#0e938b"}
                _hover={{
                  bg: "#0e938b",
                  textColor: "white",
                  borderColor: "#0e938b",
                }}
                variant="outline"
                text="Start building"
              />
            </Stack>
          </Box>
        </Stack>
      </HeroBox>

      <Image
        src='/defi_hero.webp'
        pos="absolute"
        mt={{ base: 64, lg: 56, "2xl": 64 }}
        w={{ base: "200px", md: "xs", xl: "md", "2xl": "lg" }}
        right={{ base: 2, "2xl": 48 }}
        alt="defi hero image"
        loading="eager"
      />
    </Flex>
  );
};

export default Hero
