import { Box, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

export const Cards = () => {
  return (
    <Box width="100%" maxWidth={{ base: "1024px", "2xl": "1320px" }}>
      <Stack flexDirection="column" spacing={8}>
        <Box>
          <Heading
            width={{ base: "100%", lg: "76%", "2xl": "60%" }}
            size={{ base: "lg", md: "2xl" }}
            fontWeight="medium"
            letterSpacing={-1}
          >
            Enterprise-grade platform security
          </Heading>
        </Box>

        <Box width={{ sm: "100%", lg: "700px" }}>
          <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
            At Tensfer, we prioritise security and data control.
          </Text>
        </Box>
      </Stack>

      <Stack
        mt={8}
        maxWidth={{ base: "1024px", "2xl": "1320px" }}
        width="100%"
        p={{ base: 2, lg: 0 }}
      >
        <Grid
          width="100%"
          templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
          gap={5}
        >
          <GridItem colSpan={{ base: 1, md: 2 }} textColor="black">
            <Box bg="#bedefb" p={{ base: 4, lg: 16 }} borderRadius="2xl">
              <Stack spacing={6}>
                <Box w={{ base: "32px", lg: "40px" }}>
                  <Image
                    width={100}
                    height={100}
                    src="/automation.webp"
                    alt="automation card"
                    loading="eager"
                  />
                </Box>
                <Box>
                  <Text
                    fontSize={{ sm: "lg", md: "lg", lg: "3xl" }}
                    fontWeight="semibold"
                    letterSpacing={-1}
                  >
                    Secure cloud infrastructure
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontSize={{ sm: "sm", md: "lg", "2xl": "xl" }}
                    width={{ base: "auto", lg: "720px" }}
                    letterSpacing={-0.3}
                  >
                    Tensfer uses industry leading cloud providers with very
                    secure infrastructure that is hardened against the most
                    sophisticated types of attacks. We run regular automated and
                    manual application security testing.
                  </Text>
                </Box>
              </Stack>
            </Box>
          </GridItem>

          <GridItem colSpan={1} textColor="black">
            <Box
              h={{ base: "auto", lg: "400px" }}
              bg="#bedefb"
              p={{ base: 4, lg: 16 }}
              borderRadius="2xl"
            >
              <Stack spacing={6}>
                <Box w={{ base: "32px", lg: "50px" }}>
                  <Image
                    width={100}
                    height={100}
                    src="/process.webp"
                    alt="process card"
                    loading="eager"
                  />
                </Box>
                <Box>
                  <Text
                    fontSize={{ sm: "lg", md: "lg", lg: "3xl" }}
                    fontWeight="semibold"
                    letterSpacing={-1}
                  >
                    Committed to end users privacy
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontSize={{ sm: "sm", md: "lg", "2xl": "xl" }}
                    width={{ base: "auto", md: "320px", lg: "350px" }}
                    letterSpacing={-0.3}
                  >
                    Tensfer lets end users have control over their data. We dont
                    share users financial information without their consent.
                  </Text>
                </Box>
              </Stack>
            </Box>
          </GridItem>

          <GridItem colSpan={1} textColor="black">
            <Box
              h={{ base: "auto", lg: "400px" }}
              bg="#bedefb"
              p={{ base: 4, lg: 16 }}
              borderRadius="2xl"
            >
              <Stack spacing={6}>
                <Box w={{ base: "32px", lg: "40px" }}>
                  <Image
                    width={100}
                    height={10800}
                    src="/shield.webp"
                    alt="shield card"
                    loading="eager"
                  />
                </Box>
                <Box>
                  <Text
                    fontSize={{ sm: "lg", md: "lg", lg: "3xl" }}
                    fontWeight="semibold"
                    letterSpacing={-1}
                  >
                    Industry standards encryption
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontSize={{ sm: "sm", md: "lg", "2xl": "xl" }}
                    width={{ base: "auto", lg: "380px", "2xl": "400px" }}
                    letterSpacing={-0.3}
                  >
                    Tensfer follows industry standards to ensure that end users
                    data is fully encrypted at all times. In addition to AES-256
                    encryption, we encrypt all in-transit data using the latest
                    TLS 1.2.
                  </Text>
                </Box>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </Stack>
    </Box>
  );
};
