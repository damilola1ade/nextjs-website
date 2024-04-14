import { NextSeo } from "next-seo";
import { Box, Stack } from "@chakra-ui/react";
import { Features, Hero, WhatWeBuild } from "./components";
import { MobileView } from "./components/HowItWorks/MobileView";
import { Coverage } from "@/components/LandingPage/components";
import { Layout } from "@/components/Layout";
import HowItWorks from "./components/HowItWorks/HowItWorks";

const AccountAggregation = () => {
  return (
    <>
      <NextSeo
        title="Account aggregation"
        description="Effortlessly and securely tap into diverse crypto data sources to gain comprehensive insights into your users' crypto activities, enabling tailored product offerings."
        canonical="https://tensfer.co/account-aggregation"
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

export default AccountAggregation;
