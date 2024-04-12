import { Box, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

const children = [
  {
    title: "Crypto exchange",
    to: "/crypto-exchange",
  },
  {
    title: "Crypto lending",
    to: "/crypto-lending",
  },
  {
    title: "Personal finance",
    to: "/personal-finance",
  },
  {
    title: "DeFi",
    to: "/defi",
  },
  {
    title: "Crypto tax",
    to: "/crypto-tax",
  },
];

export const UseCase = () => {
  return (
    <Box mt={12}>
      <Text
        color="#002c8a"
        fontWeight="bold"
        fontSize={{ sm: "sm", md: "md", xl: "2xl" }}
      >
        Use case
      </Text>
      <Stack
        mt={4}
        spacing="20px"
        color="gray.600"
        fontWeight="semibold"
        letterSpacing={-0.7}
        fontSize={{ base: "md", lg: "lg", "2xl": "xl" }}
      >
        {children.map((item) => (
          <Link href={item.to} key={item.to}>
            {item.title}
          </Link>
        ))}
      </Stack>
    </Box>
  );
};
