"use client";

import { motion } from "framer-motion";

import { Box, Heading, Image, Stack } from "@chakra-ui/react";

import { GetStarted } from "@/components/Buttons";
import { TypingText } from "@/hooks/CustomTexts";

export const Video = () => {
  return (
    <>
      <Stack
        mt={-12}
        direction="column"
        width="100%"
        maxW={{ base: "1024px", "2xl": "1320px" }}
        spacing={8}
      >
        <Box>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <Heading
              size={{ base: "sm", lg: "md", "2xl": "lg" }}
              fontWeight="light"
              letterSpacing={-1}
              textTransform="uppercase"
            >
              <TypingText title=" We do the heavy lifting so you do not need to." />
            </Heading>
          </motion.div>
        </Box>

        <Stack w={{ sm: "100%", lg: "900px" }}>
          <Heading
            w={{ base: "100%", lg: "100%" }}
            size={{ sm: "lg", md: "2xl" }}
            fontWeight="medium"
            letterSpacing={-1}
          >
            Providing an easy to use
          </Heading>
          <Heading
            w={{ base: "100%", lg: "100%" }}
            size={{ sm: "lg", md: "2xl" }}
            fontWeight="medium"
            letterSpacing={-1}
            bgGradient="linear(to-r, #4bc6f5, #9152ee)"
            bgClip="text"
          >
            dashboard-powered interface.
          </Heading>
        </Stack>
        <Box>
          <Stack
            spacing={{ base: 3, lg: 4 }}
            direction={{ base: "column", lg: "row" }}
          >
            <GetStarted
              w={{ base: "120px", md: "28%", lg: "auto" }}
              bgGradient="linear(to-r, #4bc6f5, #9152ee)"
              textColor={"white"}
              text={"Get started"}
              _hover={{
                bg: "white",
                textColor: "black",
                borderColor: "#b0ccfc #b2a7f4",
              }}
            />
            <Stack mt={{ base: 4, lg: 16 }} w="100%">
              <Box>
                <Image
                  src="/curve.webp"
                  width={{ base: "30px", lg: "144px" }}
                  alt="rainbow curve"
                />
              </Box>
              <Box
                pos="relative"
                top={{ base: -10, lg: -40 }}
                left={{ base: 8, lg: 48 }}
              >
                <Box
                  position="relative"
                  paddingBottom="64.67065868263472%"
                  height="0"
                >
                  <iframe
                    src="https://www.loom.com/embed/4e5fc92b8c544341967b2b61af4d39f4?sid=ba153130-f204-4b26-a575-f384eed5fcc1"
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "80%",
                      height: "70%",
                      borderRadius: "10px",
                    }}
                  ></iframe>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
