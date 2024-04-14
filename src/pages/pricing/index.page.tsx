import { Stack } from "@chakra-ui/react";
import { Features, Hero, Tiers } from "./components";
import { Layout } from "@/components/Layout";
import { NextSeo } from "next-seo";

const Pricing = () => {
  return (
    <>
      <NextSeo
        title="Pricing"
        description="We offer pricing options that fit people and organizations with different data needs. Find a plan that fits your business"
        canonical="https://tensfer.co/pricing"
      />
      <Layout>
        <Stack
          bg="#f2f9ff"
          p={{ base: 4, lg: 0 }}
          flexDirection="column"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          position="relative"
          spacing={{ base: "60px", md: "120px" }}
        >
          <Hero />

          <Tiers />

          <Features />
        </Stack>
      </Layout>
    </>
  );
};

export default Pricing;
