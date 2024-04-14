import { Box, Flex, Heading, Text, Stack, Spacer } from "@chakra-ui/react";

import Image from "next/image";

import { PiCurrencyBtcFill } from "react-icons/pi";

import { GetStarted, ScheduleADemo } from "@/components/Buttons";
import { HeroBox } from "@/components/HeroBox";

const Hero = () => {
  return (
    <Flex
      maxW={{ base: "1024px", "2xl": "1320px" }}
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent={{ base: "center", lg: "center" }}
      alignItems={{ base: "center", lg: "center" }}
    >
      <HeroBox>
        <Stack flexDirection="column" spacing={6}>
          <Box>
            <Flex gap={1}>
              <PiCurrencyBtcFill size={25} />
              <Text fontSize={{ sm: "md", md: "lg", xl: "xl" }}>
                Pay with crypto
              </Text>
            </Flex>
            <Heading
              as="h1"
              mt={2}
              size={{ sm: "lg", md: "3xl", xl: "3xl", "2xl": "4xl" }}
              fontWeight="medium"
              letterSpacing={{ sm: 0, md: -2 }}
            >
              Let your users pay with crypto
            </Heading>
          </Box>
          <Box w={{ sm: "100%", lg: "400px", xl: "450px" }}>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              Allow your users make easy, and secure crypto transfers from
              leading exchanges and wallets, without leavingyour platform.
            </Text>
          </Box>
          <Box>
            <Stack direction={{ base: "row", lg: "row" }}>
              <GetStarted
                bg={"#002c8a"}
                textColor={"white"}
                text={"Get started"}
                _hover={{
                  bg: "white",
                  textColor: "black",
                  borderColor: "black",
                }}
              />
              <ScheduleADemo
                textColor={"black"}
                text={"Book a demo"}
                variant="outline"
                borderColor="black"
                _hover={{
                  bg: "#002c8a",
                  textColor: "white",
                  borderColor: "gray.200",
                }}
              />
            </Stack>
          </Box>
        </Stack>
      </HeroBox>

      <Spacer />
      <Flex w="100%" justifyContent="center">
        <Box
          mt={{ base: 12, "2xl": 24 }}
          w={{ base: "250px", md: "xl", lg: "md", xl: "xl", "2xl": "2xl" }}
        >
          <Image
            width={500}
            height={500}
            src='/phone.png'
            quality={100}
            alt="pay with crypto image"
            priority={true}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Hero
