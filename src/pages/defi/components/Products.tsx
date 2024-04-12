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
          <Box mt={2}>
            <Image
              src="/database.webp"
              w={{ base: "120px", lg: "200px" }}
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
              Show updated balances
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
              to provide users with real-time, updated information about their
              cryptocurrency holdings.
            </Text>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box mt={2}>
            <Image
              src='/computer.webp'
              w={{ base: "144px", lg: "280px" }}
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
              Analyze transaction history
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              <Text
                as={Link}
                href="/"
                textDecoration="underline"
                _hover={{ color: "blue" }}
              >
                {" "}
                Transactions
              </Text>{" "}
              help users understand how they are using their cryptocurrency and
              enable financial tracking through a constant stream of balance
              updates
            </Text>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box mt={2}>
            <Image
              src='/wallet.webp'
              w={{ base: "120px", lg: "200px" }}
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
              Authenticate wallet ownership
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
          <Box mt={2}>
            <Image
              src='/ai.webp'
              w={{ base: "144px", lg: "280px" }}
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
              Develop product intelligence
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              Linked accounts deliver insights into users’ crypto holdings,
              including asset types and balances, providing intelligence for
              developing your own products.
            </Text>
          </Box>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default Products;
