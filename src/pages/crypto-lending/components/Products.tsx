import {
  Box,
  Center,
  Heading,
  Image,
  Link,
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
            <Image src='/hands.webp' w={{ base: "144px", lg: "200px" }}  alt='featured icons' loading="lazy"/>
          </Box>

          <Box>
            <Text
              fontSize={{ base: "lg", lg: "3xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              Calculate users net worth
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              Use{" "}
              <Text
                as={Link}
                href="/"
                textDecoration="underline"
                _hover={{ color: "blue" }}
              >
                {" "}
                Balances
              </Text>{" "}
              to provide users with a complete summary of their net worth that
              includes crypto assets.
            </Text>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box>
            <Image
              src='/transaction_history.webp'
              w={{ base: "120px", lg: "180px" }}
              alt='featured icons'
              loading="lazy"
            />
          </Box>

          <Box>
            <Text
              fontSize={{ base: "lg", lg: "3xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              Analyze transaction history
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              Review your users{" "}
              <Text
                as={Link}
                href="/"
                textDecoration="underline"
                _hover={{ color: "blue" }}
              >
                {" "}
                Transactions
              </Text>{" "}
              to understand the history of their wallets and the duration of
              their holdings.
            </Text>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box>
            <Image src='/key.webp' w={{ base: "120px", lg: "200px" }} alt='featured icons' loading="lazy"/>
          </Box>

          <Box>
            <Text
              fontSize={{ base: "lg", lg: "3xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              Prove crypto ownership
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              Leverage{" "}
              <Text
                as={Link}
                href="/"
                textDecoration="underline"
                _hover={{ color: "blue" }}
              >
                {" "}
                Accounts
              </Text>{" "}
              to enable users to link any crypto wallets and prove they are the
              owner, including exchange accounts and protocol wallets.
            </Text>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box>
            <Image src='/stamp.webp' w={{ base: "144px", lg: "240px" }} alt='featured icons' loading="lazy" />
          </Box>

          <Box>
            <Text
              fontSize={{ base: "lg", lg: "3xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              Avoid legal and security risk
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              By linking existing wallets you reduce legal and security risks by
              assessing credit without needing to take custody of your users’
              cryptocurrency
            </Text>
          </Box>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default Products
