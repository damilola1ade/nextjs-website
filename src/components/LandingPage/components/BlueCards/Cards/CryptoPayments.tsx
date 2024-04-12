import { Box, Flex, Text } from "@chakra-ui/react";

import Image from "next/image";

import { LearnMore } from "@/components/Buttons";

export const CryptoPayments = () => {
  return (
    <Box
      minH="520px"
      // ref={boxRef}
      mt={2}
      p={{ sm: 8, lg: 12 }}
      bg="#c9e9f6"
      borderRadius="xl"
      textColor="black"
    >
      <Flex flexDirection={{ base: "column", lg: "row" }} alignItems="center">
        <Box mt={12} w={{ base: "250px", lg: "720px" }}>
          <Image
            width={500}
            height={500}
            src="/transfer_success.webp"
            alt="blue card"
            loading="lazy"
          />
        </Box>

        <Box mt={4} textAlign="left" ml={{ base: 0, md: 42 }}>
          <Text fontSize={{ sm: "md", md: "xl", "2xl": "2xl" }}>
            Crypto payments
          </Text>
          <Text
            mt={4}
            fontSize={{ sm: "md", md: "xl", "2xl": "3xl" }}
            fontWeight="bold"
          >
            Move money seamlessly
          </Text>
          <Text
            w={{ base: "100%", lg: "90%" }}
            mt={8}
            fontSize={{ sm: "sm", md: "lg", "2xl": "2xl" }}
          >
            Raise your conversion rates with seamless account-to-account
            payments. <br />
            Allow your customers fund their wallets from multiple platforms
            without leaving your app.
          </Text>

          <LearnMore to="/pay-with-crypto" />
        </Box>
      </Flex>
    </Box>
  );
};
