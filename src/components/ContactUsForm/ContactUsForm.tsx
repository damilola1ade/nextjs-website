import { Box, Text, Stack, Flex, Heading } from "@chakra-ui/react";
import { FormData } from "./components/FormData";
import { motion } from "framer-motion";
import { TypingText } from "@/hooks/CustomTexts";

export const ContactUsForm = () => {
  return (
    <Flex w="100%" mb={32} position="relative" overflow="hidden">
      <Flex
        w="100%"
        maxW={{ base: "1024px", "2xl": "1320px" }}
        mx="auto"
        justifyContent="space-between"
        pt={{ md: "0px" }}
      >
        <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
          <Flex
            bg="white"
            mt={72}
            p={{ base: 6, lg: 24 }}
            zIndex="2"
            direction={{ base: "column", lg: "row" }}
            borderRadius="xl"
            boxShadow="2xl"
          >
            <Stack position="absolute" top={40}>
              <Box>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                >
                  <Heading
                    as="h1"
                    size={{ base: "sm", lg: "sm", "2xl": "md" }}
                    fontWeight="normal"
                    letterSpacing={-1}
                    color="#002C8A"
                    textTransform="uppercase"
                  >
                    <TypingText title=" Get in touch." />
                  </Heading>
                </motion.div>
              </Box>

              <Box>
                <Heading
                  w={{ base: "100%", lg: "100%" }}
                  size={{ sm: "xl", md: "2xl" }}
                  fontWeight="medium"
                  letterSpacing={-1}
                >
                  Contact our team
                </Heading>
              </Box>
            </Stack>

            <Stack direction={{ base: "column", lg: "row" }} spacing={12}>
              <Box w={{ sm: "100%", md: "600px" }}>
                <Stack flexDirection="column" spacing={6}>
                  <Box>
                    <Text
                      fontSize={{ sm: "md", md: "lg", xl: "lg", "2xl": "xl" }}
                    >
                      Our sales and support teams are more than happy to answer
                      your questions and discuss our products and integrations.{" "}
                      <br /> Send us a message, and we will get back to you as
                      soon as possible.
                    </Text>
                  </Box>
                  <Box fontSize={{ sm: "md", md: "lg", xl: "lg", "2xl": "xl" }}>
                    <Text>
                      For payment issues,
                      <br />{" "}
                      <Stack spacing={1} direction="row">
                        <Text>Contact:</Text>
                        <a
                          href="mailto:sales@tensfer.co"
                          style={{ color: "blue", textDecoration: "none" }}
                        >
                          <Text color="blue">sales@tensfer.co</Text>
                        </a>
                      </Stack>
                    </Text>
                  </Box>
                </Stack>
              </Box>
              <Box>
                <FormData />
              </Box>
            </Stack>
          </Flex>
        </Flex>
        <Box
          overflow="hidden"
          h="50%"
          w="100%"
          left="0px"
          position="absolute"
          bg="#C2ECFF"
        ></Box>
      </Flex>
    </Flex>
  );
};

{
  /* <Box bg="red" w="100%" mt={32}>
  <Stack
    bg="white"
    p={16}
    mb={32}
    borderRadius="lg"
    maxW={{ base: "1024px", "2xl": "1320px" }}
    mx="auto"
    direction={{ base: "column", lg: "row" }}
    spacing={32}
  >
    <Box w={{ sm: "100%", md: "500px" }}>
      <Stack flexDirection="column" spacing={6}>
        <Box>
          <Text fontSize={{ sm: "md", md: "lg", xl: "lg" }}>
            Our sales and support teams are more than happy to answer your
            questions and discuss our products and integrations. <br /> Send us
            a message, and we will get back to you as soon as possible.
          </Text>
        </Box>
        <Box>
          <Text fontSize={{ sm: "md", md: "lg", xl: "lg" }}>
            For payment issues,
            <br />{" "}
            <Stack spacing={1} direction="row">
              <Text>Contact:</Text>
              <Text>disputes@okra.ng</Text>
            </Stack>
          </Text>
        </Box>
      </Stack>
    </Box>
    <Box>
      <FormData />
    </Box>
  </Stack>
</Box>; */
}
