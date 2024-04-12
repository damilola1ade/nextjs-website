import {
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

import { IoMdCheckmark } from "react-icons/io";


const data = [
  {
    image: '/dataflip.webp',
    title: " Initiate Transfers",
    body: [
      "Initiate a transfer over a specified network between exchanges or wallets",
    ],
  },
  {
    image: '/integrations.webp',
    title: "Integrations",
    body: [
      "Largest Centralized Exchanges (eg. Binance, Coinbase, Kraken)",
      "Popular Self-custody Wallets (Eg. MetaMask, TrustWallets)",
    ],
  },
  {
    image: '/portfolio.webp',
    title: "Portfolio/Balance",
    body: [
      "Track holdings in real-time across connected accounts",
      "See a real-time balance of fiat holdings",
      "View aggregated portfolio data for all connected accounts",
    ],
  },
  {
    image: '/paperclock.webp',
    title: " Historical data",
    body: [
      "Paginated history for executed orders or transfers (deposit/withdrawals) for any connected accounts",
      "View details (eg. date, time, amount, symbol, etc) for historical transactions and transfers",
    ],
  },
];

const Features = () => {
  return (
    <Stack
      w="100%"
      mb={32}
      maxW={{ base: "1024px", "2xl": "1320px" }}
      justifyContent="space-between"
      direction={{ base: "column", lg: "row" }}
      spacing={6}
    >
      <Heading
        size={{ sm: "lg", md: "2xl" }}
        fontWeight="medium"
        letterSpacing={-1}
      >
        Features
      </Heading>
      <Spacer />

      <SimpleGrid columns={[1, 1, 2]} spacing={12}>
        {data.map((item, idx) => (
          <Stack key={idx}>
            <Image
              src={item.image}
              w={{ base: "40px", lg: "60px" }}
              alt="featured-images"
              loading="lazy"
            />
            <Text
              fontSize={{ sm: "lg", md: "2xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              {item.title}
            </Text>
            {item.body.map((pro, idx) => (
              <Stack key={idx} maxW="360px" mt={4} direction="row" spacing={2}>
                <Icon
                  fontSize="xl"
                  mt={1}
                  as={IoMdCheckmark}
                  color="green.500"
                />
                <Text fontSize={{ base: "sm", md: "md", "2xl": "xl" }}>
                  {pro}
                </Text>
              </Stack>
            ))}
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Features
