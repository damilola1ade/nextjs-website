import { Box, Stack } from "@chakra-ui/react";
import { Features, Hero, WhatWeBuild } from "./components";
import { MobileView } from "./components/HowItWorks/MobileView";
import { Coverage } from "@/components/LandingPage/components";
import { Layout } from "@/components/Layout";
import HowItWorks from "./components/HowItWorks/HowItWorks";

const AccountAggregation = () => {
  return (
    <Layout>
      {/* <Helmet>
        <title>Account aggregation</title>
        <meta
          name="description"
          content="Easily and safely access a wide range of crypto data sources and wallets, to
          get a full picture of your user’s crypto activity and offer
          custom-made products and services."
        />
        <link rel="canonical" href="https://tensfer.co/products/account-aggregation/" />
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

export default AccountAggregation;
