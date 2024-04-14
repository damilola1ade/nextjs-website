import { NextSeo } from "next-seo";
import { Stack } from "@chakra-ui/react";
import { Hero } from "./components";
import { AboveFooter } from "@/components/LandingPage/components";
import { Layout } from "@/components/Layout";

const Demo = () => {
  return (
    <>
      <NextSeo
        title="Tensfer demo"
        description="Explore and see how business use Tensfer widget including financial data and payments"
        canonical="https://tensfer.co/demo"
      />
      <Layout>
        <Stack
          mb={32}
          p={{ base: 4, lg: 0 }}
          flexDirection="column"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          position="relative"
          spacing={{ base: "60px", md: "120px" }}
        >
          <Hero />
        </Stack>
        <AboveFooter />
      </Layout>
    </>
  );
};

export default Demo;
