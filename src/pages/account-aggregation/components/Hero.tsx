import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/react";

import Image from "next/image";

import { VscRepoForked } from "react-icons/vsc";

import { GetStarted, ScheduleADemo } from "@/components/Buttons";
import { HeroBox } from "@/components/HeroBox";

const Hero = () => {
  return (
    <Flex
      w="100%"
      maxW={{ base: "1024px", "2xl": "1320px" }}
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent={{ base: "center", lg: "space-between" }}
    >
      <Box>
        <HeroBox>
          <Stack flexDirection="column" spacing={10}>
            <Box>
              <Flex>
                <Box transform="rotate(90deg)">
                  <VscRepoForked size={25} />
                </Box>
                <Text ml={2} mt={1} fontSize={{ sm: "md", md: "lg", xl: "xl" }}>
                  Account aggregation
                </Text>
              </Flex>
              <Heading
                as="h1"
                w="120%"
                mt={2}
                size={{ sm: "lg", md: "3xl", xl: "3xl", "2xl": "3xl" }}
                fontWeight="medium"
                letterSpacing={{ sm: -1, md: -2 }}
              >
                Unified crypto data,
              </Heading>
              <Heading
                w="120%"
                mt={2}
                size={{ sm: "lg", md: "3xl", xl: "3xl", "2xl": "3xl" }}
                fontWeight="medium"
                letterSpacing={{ sm: -1, md: -2 }}
              >
                Simplified access.
              </Heading>
            </Box>
            <Box w={{ sm: "100%", md: "520px" }}>
              <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
                Easily and safely access a wide range of crypto data sources, to
                get a full picture of your user’s crypto activity and offer
                custom-made products.
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
      </Box>

        <Box
          mt={{ base: 12, lg: 24 }}
          w={{ base: "250px", md: "xl", lg: "md", xl: "xl", "2xl": "2xl" }}
        >
          <Image
            width={500}
            height={500}
            src='/account.webp'
            quality={100}
            alt="account aggregation image"
            priority={true}
          />
        </Box>
    </Flex>
  );
};

export default Hero;
