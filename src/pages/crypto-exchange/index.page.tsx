import { Stack } from "@chakra-ui/react";
import { Hero, ProblemSolution, Products } from "./components";
import { Form } from "@/components/Form";
import { Layout } from "@/components/Layout";

const CryptoExchange = () => {
  return (
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
  );
};

export default CryptoExchange;
