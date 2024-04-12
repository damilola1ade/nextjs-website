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
            <Image
              src="/wifi.webp"
              w={{ base: "144px", lg: "xs" }}
              alt="featured icons"
              loading="lazy"
            />
          </Box>

          <Box>
            <Text
              fontSize={{ base: "lg", lg: "3xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              Extensive coverage
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              Integrate with Tensfer and allow your users gain secure
              connectivity to leading crypto exchanges and wallets, without
              leaving your platform.
            </Text>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box>
            <Image
              src="/dx.webp"
              w={{ base: "64px", lg: "144px" }}
              alt="featured icons"
              loading="lazy"
            />
          </Box>

          <Box>
            <Text
              fontSize={{ sm: "lg", md: "3xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              Seamless DX
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              Integrate in hours with our developer friendly SDKs & APIs.
            </Text>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box>
            <Image
              src="/form.webp"
              w={{ base: "144px", lg: "sm" }}
              alt="featured icons"
              loading="lazy"
            />
          </Box>

          <Box>
            <Text
              fontSize={{ base: "lg", lg: "3xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              Instant onboarding
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              Enable your user login to external accounts, using email, or API
              keys, to initiate smooth and secure transfers without leaving your
              app.
            </Text>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box>
            <Image
              src="/network_colorful.webp"
              w={{ base: "144px", lg: "xs" }}
              alt="featured icons"
              loading="lazy"
            />
          </Box>

          <Box>
            <Text
              fontSize={{ base: "lg", lg: "3xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              Network support
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              Tensfer has connected various networks used in exchanges and
              wallets with a guided UX, to ensure your users make transfers with
              ease.
            </Text>
          </Box>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default Products
