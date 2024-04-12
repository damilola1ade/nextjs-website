import { Box, Heading, Stack, Text } from "@chakra-ui/react";

import Image from "next/image";


const data = [
  {
    image: '/scale_blue.webp',
    title: "Balance & Position",
    body: "Access your users position and balance data from various CEXs and self-custody wallets.",
  },
  {
    image: '/transactionhistory.webp',
    title: "Transaction history",
    body: " Combine transaction data across various wallets effortlessly using Tensfer's extensive API.",
  },
  {
    image: '/security.webp',
    title: " Real-time data",
    body: " Show your users all their historical activity, balance of fiat holdings and and render protocol-level insights with real-time data.",
  },
];

const Features = () => {
  return (
    <Box maxW={{ base: "1024px", "2xl": "1320px" }}>
      <Heading
        size={{ sm: "lg", md: "2xl" }}
        fontWeight="medium"
        letterSpacing={-1}
      >
        Features
      </Heading>

      <Stack direction={{ base: "column", md: "row" }} mt={12} spacing={12}>
        {data.map((item) => (
          <Stack key={item.title}>
            <Box w={{ base: "60px", lg: "80px" }}>
              <Image
                src={item.image}
                width={100}
                height={100}
                alt="featured-icons"
                loading="lazy"
              />
            </Box>
            <Text
              fontSize={{ sm: "lg", md: "2xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              {item.title}
            </Text>
            <Text maxW="480px" fontSize={{ sm: "md", md: "lg", xl: "xl" }}>
              {item.body}
            </Text>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Features;
