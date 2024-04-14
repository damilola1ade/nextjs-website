import { Box, Circle, Flex, Stack, Text } from "@chakra-ui/react";

import Image from "next/image";
// import { TypingText } from "@/hooks/CustomTexts";

const payWithCryptoData = [
  {
    id: "01",
    title: "Obtain user consent",
    body: "Customers are given information about the process and give Tensfer informed consent to process and authenticate their data.",
    image: "/iphone.png",
  },
  {
    id: "02",
    title: "Select wallet",
    body: "Your customers can select their preferred account from a wide coverage of self custody wallets and exchanges.",
    image: "/wallet.png",
  },
  {
    id: "03",
    title: "Authenticate ownership",
    body: "Your customers verify with their credentials and connect their preferred exchange or wallet to your app in seconds.",
    image: "/apikeys.png",
  },
  {
    id: "04",
    title: "Make payment",
    body: "Customers can select assets, select network, review payments and send payments in seconds.",
    image: "/authenticate.png",
  },
];

export const MobileView = () => {
  return (
    <Box bg="#f4f6f8" p={{ base: 4, lg: 12 }} borderRadius="2xl">
      <Stack mx="auto" spacing={8}>
        <Box>
          <Flex>
            <Text
              fontWeight="medium"
              fontSize={{ base: "md", "2xl": "xl" }}
              letterSpacing={-1}
              zIndex={2}
            >
              {/* <TypingText title="HOW IT WORKS" /> */}
            </Text>
            <Box
              bg="purple.100"
              h="20px"
              w="110px"
              borderRadius="full"
              pos="absolute"
              ml={1}
              mt={2}
              opacity={0.6}
            />
          </Flex>
        </Box>

        <Box>
          <Text
            fontSize={{ base: "lg", "2xl": "xl" }}
            fontWeight="semibold"
            letterSpacing={-0.5}
          >
            The fastest way to authenticate your customers
          </Text>
        </Box>

        <Stack spacing={12} mt={4}>
          {payWithCryptoData.map((item) => (
            <Stack key={item.id} spacing={5}>
              <Stack direction="row" spacing={3}>
                <Circle
                  px={2}
                  bg="purple.100"
                  textColor="black"
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="bold"
                >
                  {item.id}
                </Circle>
                <Text
                  fontWeight="semibold"
                  fontSize={{ base: "md", "2xl": "2xl" }}
                  letterSpacing={-0.7}
                >
                  {item.title}
                </Text>
              </Stack>
              <Text
                w="auto"
                fontSize="sm"
                textColor="gray.600"
                fontWeight="medium"
              >
                {item.body}
              </Text>
              <Flex
                w="100%"
                bg="#e9edf8"
                bgImage="/pattern.svg"
                bgSize="cover"
                bgBlendMode="multiply"
                h="200px"
                borderRadius="2xl"
                position="relative"
                justifyContent="center"
                overflow="hidden"
              >
                <Box position="absolute" w="120px" mt={4}>
                  <Image
                    src={item.image}
                    width={800}
                    height={800}
                    alt="featured-images"
                  />
                </Box>
              </Flex>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};
