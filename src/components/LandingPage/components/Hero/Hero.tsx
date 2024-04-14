"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Flex, Heading, Tag, Text, Stack, Spacer } from "@chakra-ui/react";

import Image from "next/image";

import { ExploreDemo, GetStarted } from "@/components/Buttons";
import { HeroBox } from "@/components/HeroBox";
import { Cookies } from "@/components/Cookies";

export const Hero = () => {
  const [index, setIndex] = useState(0);

  const texts = [
    "onboard",
    "link a wallet",
    "deposit crypto",
    "pay with crypto",
  ];

  const variants = {
    enter: () => {
      return {
        y: -20,
        opacity: 1,
      };
    },
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: () => {
      return {
        zIndex: 0,
        opacity: 1,
      };
    },
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 2 * 3000);

    return () => clearTimeout(timeoutId);
  }, [index, setIndex, texts.length]);

  return (
    <Box w="100%" textColor="black">
      <HeroBox>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          maxW={{ base: "1024px", "2xl": "1320px" }}
          mx="auto"
          justifyContent={{ base: "center", lg: "unset" }}
          alignItems={{ base: "center", lg: "unset" }}
        >
          <Box>
            <Stack flexDirection="column" spacing={8}>
              <Box>
                <Tag
                  p={2}
                  w={{ sm: "125px", md: "175px" }}
                  justifyContent="center"
                  bg="#b0d9ff"
                  textColor="black"
                  fontWeight="medium"
                  borderRadius="full"
                  fontSize={{ base: "xs", md: "md", xl: "md" }}
                  opacity={0.8}
                  letterSpacing={-0.4}
                >
                  Connecting crypto
                </Tag>
                <Box maxW="560px">
                  <Heading
                    as="h1"
                    mt={2}
                    size={{ sm: "lg", md: "2xl", lg: "3xl", "2xl": "4xl" }}
                    fontWeight="semibold"
                    letterSpacing={{ sm: 0, md: -2 }}
                  >
                    The safer way for your users to
                    <br />
                    <AnimatePresence>
                      <motion.span
                        style={{ position: "absolute" }}
                        variants={variants}
                        key={index}
                        initial="enter"
                        animate="center"
                        exit="exit"
                      >
                        <Heading
                          mt={{ base: -1, md: 2 }}
                          h="100px"
                          bgGradient="linear(to-r, #4bc6f5, #9152ee)"
                          bgClip="text"
                          size={{
                            sm: "lg",
                            md: "2xl",
                            lg: "3xl",
                            "2xl": "4xl",
                          }}
                          fontWeight="semibold"
                          letterSpacing={{ sm: 0, md: -2 }}
                        >
                          {texts[index]}
                        </Heading>
                      </motion.span>
                    </AnimatePresence>
                  </Heading>
                </Box>
              </Box>
              <Box maxW="480px" mt={{ base: 4, md: 10, lg: 20 }}>
                <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
                  Tensfer enables easier access to the Web3 Portfolios of your
                  users and allow them make account-account crypto transfers,
                  without leaving your platform.
                </Text>
              </Box>
              <Box>
                <Stack
                  spacing={{ base: 3, lg: 4 }}
                  direction={{ base: "row", lg: "row" }}
                >
                  <GetStarted
                    bgGradient="linear(to-r, #4bc6f5, #9152ee)"
                    textColor={"white"}
                    text={"Get in touch"}
                    _hover={{
                      bg: "white",
                      textColor: "black",
                      borderColor: "#b0ccfc #b2a7f4",
                    }}
                  />
                  <ExploreDemo
                    bg="white"
                    textColor={"black"}
                    text={"Explore demo"}
                    border="1px"
                    borderColor="#b0ccfc #b2a7f4"
                    _hover={{
                      bgGradient: "linear(to-r, #4bc6f5, #9152ee)",
                      textColor: "white",
                      border: "0px",
                    }}
                  />
                  <Cookies />
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Spacer />

          <Box
            display={{ base: "none", lg: "flex" }}
            position="relative"
            h="80%"
            left={12}
            zIndex={2}
          >
            <Box w={{ md: "xl", lg: "md", xl: "xl", "2xl": "3xl" }} h="80%">
              <Image
                src="/hero_image.webp"
                width={1000}
                height={1000}
                quality={100}
                alt="hero image"
                priority={true}
              />
            </Box>
          </Box>
        </Flex>
      </HeroBox>
    </Box>
  );
};
