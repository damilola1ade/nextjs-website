import { Box, Heading, Stack, Text } from "@chakra-ui/react";

import Image from "next/image";

const data = [
  {
    image: '/code.webp',
    title: " Low-code integration in minutes",
    body: "Integrate crypto payment and deposits in your app from leading exchanges and wallets with one integration, saving engineering cost.",
  },
  {
    image: '/simplified_ux.webp',
    title: "Simplified UX",
    body: " Quit letting your users toggle between apps, copying and pasting addresses to make payment.",
  },
  {
    image: '/lego.webp',
    title: " Compatibility across networks is guaranteed",
    body: "No need for guesswork or alarming warnings—just secure and well-informed transfers.",
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
            <Text maxW="400px" fontSize={{ sm: "md", md: "lg", xl: "xl" }}>
              {item.body}
            </Text>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Features
