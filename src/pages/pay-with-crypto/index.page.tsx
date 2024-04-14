import { NextSeo } from "next-seo";
import { Box, Stack } from "@chakra-ui/react";
import { Features, Hero, WhatWeBuild } from "./components";
import { MobileView } from "./components/HowItWorks/MobileView";
import { Coverage } from "@/components/LandingPage/components";
import { Layout } from "@/components/Layout";
import HowItWorks from "./components/HowItWorks/HowItWorks";

const PayWithCrypto = () => {
  return (
    <>
      <NextSeo
        title="Pay with crypto"
        description="Empower your users to effortlessly and securely transfer crypto from top exchanges and wallets, all within your platform's ecosystem."
        canonical="https://tensfer.co/pay-with-crypto"
      />
      <Layout>
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
    </>
  );
};

export default PayWithCrypto;
