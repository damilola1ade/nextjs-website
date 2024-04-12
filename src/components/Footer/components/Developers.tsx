import { Box, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

const children = [
  {
    title: "API Docs",
    to: "https://docs.tensfer.co",
  },
];

export const Developers = () => {
  return (
    <Box mt={12}>
      <Text
        color="#002c8a"
        fontWeight="bold"
        fontSize={{ sm: "sm", md: "md", xl: "2xl" }}
      >
        Developers
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
          <Link href={item.to} key={item.to} target="blank">
            {item.title}
          </Link>
        ))}
      </Stack>
    </Box>
  );
};
