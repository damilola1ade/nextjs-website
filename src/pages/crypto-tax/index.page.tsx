import { NextSeo } from "next-seo";
import { Stack } from "@chakra-ui/react";
import { Hero, ProblemSolution, Products } from "./components";
import { Form } from "@/components/Form";
import { Layout } from "@/components/Layout";

const CryptoTax = () => {
  return (
    <>
      <NextSeo
        title="Crypto tax"
        description="Develop a tax reporting solution tailored for your users."
        canonical="https://tensfer.co/crypto-tax"
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

export default CryptoTax;
