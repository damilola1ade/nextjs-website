import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

const Products = () => {
  return (
    <Box maxW={{ base: "1024px", "2xl": "1320px" }}>
      <Center>
        <Heading
          size={{ sm: "lg", md: "2xl" }}
          fontWeight="medium"
          letterSpacing={-1}
        >
          Products & Benefits
        </Heading>
      </Center>

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={16}
        mt={{ base: 12, lg: 24 }}
      >
        <Stack direction="row">
          <Box>
            <Image src='/network.webp' w={{ base: "144px", lg: "xs" }} alt='featured icons' loading="lazy" />
          </Box>

          <Box>
            <Text
              fontSize={{ base: "lg", lg: "3xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              Seamless API Integration
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              Tensfer’s APIs helps your business to expand its reach by allowing
              your users to import their transaction data from a variety of
              exchanges or wallets into your platform.
            </Text>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box>
            <Image src='/scale.webp' w={{ base: "144px", lg: "xs" }} alt='featured icons' loading="lazy" />
          </Box>

          <Box>
            <Text
              fontSize={{ base: "lg", lg: "3xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              Scalability and Reliability
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "xl" }}>
              By leveraging Tensfer scalable infrastructure, your business can
              ensure reliability and scalability, accommodating a growing user
              base and increased transaction volumes.
            </Text>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box>
            <Image src='/accuracy.webp' w={{ base: "180px", lg: "sm" }} alt='featured icons' loading="lazy" />
          </Box>

          <Box>
            <Text
              fontSize={{ base: "lg", lg: "3xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              Enhanced Accuracy
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              You can improve the accuracy of tax calculations for your users by
              utilizing Tensfer. This accuracy is crucial for your users to
              comply with tax regulations and accurately report their
              cryptocurrency transactions.
            </Text>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box>
            <Image src='/compliance.webp' w={{ base: "144px", lg: "xs" }} alt='featured icons' loading="lazy" />
          </Box>

          <Box>
            <Text
              fontSize={{ base: "lg", lg: "3xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              Regulatory Compliance
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              Tensfer can help your business provide comprehensive transaction
              data adhering to industry standards, which is aligned with
              regulatory guidelines.
            </Text>
          </Box>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default Products
