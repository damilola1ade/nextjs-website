import { Stack } from "@chakra-ui/react";
import { Features, Hero, Tiers } from "./components";
import { Layout } from "@/components/Layout";

const Pricing = () => {
  return (
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
  );
};

export default Pricing;
