/* eslint-disable react/no-unescaped-entities */
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
              src="/cpu.webp"
              w={{ base: "144px", lg: "xs" }}
              loading="lazy"
              alt="cpu icon"
            />
          </Box>

          <Box>
            <Text
              fontSize={{ base: "lg", lg: "3xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              Seamless integration
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              Simplify your users portfolio by allowing them connect crypto
              accounts to your platform smoothly and securely with our
              user-friendly widget
            </Text>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box>
            <Image
              src="/umbrella.webp"
              w={{ base: "144px", lg: "xs" }}
              loading="lazy"
              alt="umbrella icon"
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
              Retrieve data from the top exchanges & wallets such as Binance,
              Coinbase, and Metamask, in addition to hundreds of additional
              platforms.
            </Text>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box>
            <Image
              src="/data.webp"
              w={{ base: "180px", lg: "sm" }}
              loading="lazy"
              alt="data icon"
            />
          </Box>

          <Box>
            <Text
              fontSize={{ sm: "xl", md: "3xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              Standardized data
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              We provide fiat values and normalized transaction types to give
              you a complete, easy-to-understand view of your users' crypto
              assets and transactions.
            </Text>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box>
            <Image
              src="/phone_text.webp"
              w={{ base: "144px", lg: "xs" }}
              loading="lazy"
              alt="phone text icon"
            />
          </Box>

          <Box>
            <Text
              fontSize={{ sm: "xl", md: "3xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              Enable in–app balance checks
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              Enhance user engagement by using Balance, to allow your users to
              check the balances of their various crypto accounts in real-time
              within your app.
            </Text>
          </Box>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default Products;
