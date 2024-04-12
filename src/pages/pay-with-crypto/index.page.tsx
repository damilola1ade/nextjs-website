import { Box, Stack } from "@chakra-ui/react";
import { Features, Hero, WhatWeBuild } from "./components";
import { MobileView } from "./components/HowItWorks/MobileView";
import { Coverage } from "@/components/LandingPage/components";
import { Layout } from "@/components/Layout";
import HowItWorks from "./components/HowItWorks/HowItWorks";

const PayWithCrypto = () => {
  return (
    <Layout>
      {/* <Helmet>
        <title>Pay With Crypto</title>
        <meta
          name="description"
          content=" Allow your users make easy, and secure cryptocurrency transfers from 
              leading exchanges and wallets, without ever leaving your platform."
        />
        <link rel="canonical" href="https://tensfer.co/products/pay-with-crypto/" />
      </Helmet> */}
      <Stack
        p={{ base: 4, lg: 0 }}
        flexDirection="column"
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
        position="relative"
        spacing={{ base: "100px", md: "120px" }}
      >
        <Hero />

        <Features />

        {/* How it works component */}
        <Box w="100%" display={{ base: "none", lg: "flex" }}>
          <HowItWorks />
        </Box>

        <Box w="100%" display={{ base: "flex", lg: "none" }}>
          <MobileView />
        </Box>

        <WhatWeBuild />

        <Coverage />
      </Stack>
    </Layout>
  );
};

export default PayWithCrypto;
