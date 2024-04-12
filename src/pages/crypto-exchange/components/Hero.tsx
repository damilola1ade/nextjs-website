import {
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Flex,
  Center,
} from "@chakra-ui/react";
import { GetStarted, ScheduleADemo } from "../../../components/Buttons";

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
            src='/purple_bg.svg'
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
              Crypto Exchange
            </Heading>
          </Box>

          <Center>
            <Text
              fontSize={{ sm: "md", md: "lg", lg: "2xl", "2xl": "3xl" }}
              w={{ base: "100%", lg: "60%" }}
              textAlign="center"
              fontWeight="medium"
              color="#313233"
            >
              Leverage account to account payments to boost conversions and
              increase your revenue.
            </Text>
          </Center>

          <Box w={{ base: "full", md: "auto" }}>
            <Stack
              direction={{ base: "row", lg: "row" }}
              justifyContent="center"
            >
              <GetStarted
                bg={"#693fb6"}
                textColor="white"
                _hover={{
                  bg: "white",
                  textColor: "#693fb6",
                  borderColor: "#693fb6",
                }}
                text="Get started"
              />
              <ScheduleADemo
                textColor={"#693fb6"}
                borderColor={"#693fb6"}
                _hover={{
                  bg: "#693fb6",
                  textColor: "white",
                  borderColor: "#693fb6",
                }}
                variant="outline"
                text="Start building"
              />
            </Stack>
          </Box>
        </Stack>
      </HeroBox>

      <Image
        src='/purple.webp'
        pos="absolute"
        mt={{ base: 72, lg: 64, "2xl": 64 }}
        w={{ base: "250px", md: "md", xl: "lg", "2xl": "xl" }}
        right={{ base: 0, "2xl": 28 }}
        alt="crypto tax hero image"
        loading="eager"
      />
    </Flex>
  );
};

export default Hero
