import { Box, Heading, Stack, Text } from "@chakra-ui/react";

import Image from "next/image";

const data = [
  {
    image: '/defi.webp',
    title: "Decentralized Finance (DeFi)",
    body: "Allow your users connect their self-custody wallets or exchanges and perform account-to-account transfers within your app without leaving.",
  },
  {
    image: '/ssm.webp',
    title: "Subscription Services and Micropayments",
    body: "  Create subscription-based services or enable micropayments within their app using Tensfer's embedded crypto payments product.",
  },
  {
    image: '/tokenization.webp',
    title: "Tokenization and Rewards Programs",
    body: " Tokenize assets or create loyalty and rewards programs for your users.",
  },
];

const WhatWeBuild = () => {
  return (
    <Box maxW={{ base: "1024px", "2xl": "1320px" }}>
      <Heading
        size={{ sm: "lg", md: "2xl" }}
        fontWeight="medium"
        letterSpacing={-1}
      >
        Use cases
      </Heading>

      <Text
        mt={4}
        color="gray.500"
        fontSize={{ sm: "lg", md: "2xl" }}
        letterSpacing={-1}
      >
        What can you build with Tensfer Payment?
      </Text>

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

export default WhatWeBuild
