import { Box, Heading, Stack, Text } from "@chakra-ui/react";

import Image from "next/image";

const data = [
  {
    image: '/expensetracking.webp',
    title: "Expense Tracking and Budgeting",
    body: "Build a personal finance app that allows your users track their crypto assets across various wallets.",
  },
  {
    image: '/taxreporting.webp',
    title: "Tax Reporting Tools",
    body: " Build crypto tax tools and help your users automatically generate tax reports from their crypto earning.",
  },
  {
    image: '/realtime.webp',
    title: "Real-time Alerts and Notifications",
    body: " Implement alerts that notifies your users about significant changes in their portfolio.",
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
        fontSize={{ sm: "lg", md: "xl" }}
        letterSpacing={-1}
      >
        What can you build with Account Aggregation?
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
