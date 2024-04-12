import { motion } from "framer-motion";
import { Box, Flex, Heading, Image, Text, Stack } from "@chakra-ui/react";

import { HeroBox } from "@/components/HeroBox";
import { GetStarted } from "../../../components/Buttons";

const Hero = () => {
  return (
    <Box w="100%" bg={{ base: "white", lg: "#cfe2f4" }}>
      <Flex
        flexDirection="column"
        w="100%"
        maxW={{ base: "1024px", "2xl": "1320px" }}
        mx="auto"
      >
        <HeroBox pb={{ base: 0, lg: 32 }}>
          <Stack direction="column" spacing={{ base: 8, lg: 10 }}>
            <Flex gap={{ base: 2, lg: 4 }} as="h1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Heading
                  size={{ sm: "md", md: "2xl", xl: "3xl", "2xl": "4xl" }}
                  fontWeight="medium"
                  letterSpacing={{ sm: 0, md: -2 }}
                >
                  Reshaping
                </Heading>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Heading
                  size={{ sm: "md", md: "2xl", xl: "3xl", "2xl": "4xl" }}
                  fontWeight="medium"
                  letterSpacing={{ sm: 0, md: -2 }}
                >
                  Financial
                </Heading>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
              >
                <Heading
                  size={{ sm: "md", md: "2xl", xl: "3xl", "2xl": "4xl" }}
                  fontWeight="medium"
                  letterSpacing={{ sm: 0, md: -2 }}
                >
                  Connectivity
                </Heading>
              </motion.div>
            </Flex>

            <Text
              fontSize={{ sm: "md", md: "lg", lg: "2xl", "2xl": "3xl" }}
              w={{ base: "100%", lg: "80%" }}
              fontWeight="medium"
              color="#313233"
            >
              Tensfer is creating an easy-to-integrate infrastructure that
              delivers access to hundreds of embedded integrations for
              businesses that seek secure and fast crypto transfers for
              themselves and their customers.
            </Text>

            <GetStarted
              textColor="black"
              text="Join us"
              borderColor="black"
              w={{ base: "30%", md: "20%" }}
            />
          </Stack>
        </HeroBox>

        <Image
          pos="absolute"
          display={{ base: "none", lg: "flex" }}
          right={-16}
          top={40}
          src='/aboutus.webp'
          w={{ base: "xl", "2xl": "2xl" }}
          alt='about-us static image'
          loading="lazy"
        />
      </Flex>
    </Box>
  );
};

export default Hero
