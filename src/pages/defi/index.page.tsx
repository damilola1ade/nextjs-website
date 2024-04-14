import { NextSeo } from "next-seo";
import { Stack } from "@chakra-ui/react";
import { Hero, ProblemSolution, Products } from "./components";
import { Form } from "@/components/Form";
import { Layout } from "@/components/Layout";

const DeFi = () => {
  return (
    <>
      <NextSeo
        title="DeFi"
        description="Expand by offering additional assets and greater value to your users."
        canonical="https://tensfer.co/defi"
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

          <ProblemSolution />

          <Products />

          <Form />
        </Stack>
      </Layout>
    </>
  );
};

export default DeFi;
