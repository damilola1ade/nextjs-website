import { Stack } from "@chakra-ui/react";
import { Card, Hero, OurMission, Values } from "./components";
import { Layout } from "@/components/Layout";

const AboutUs = () => {
  return (
    <Layout>
      <Stack
        mt={{ base: 0, "2xl": 24 }}
        p={{ base: 4, lg: 0 }}
        flexDirection="column"
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
        position="relative"
        spacing={{ base: "100px", md: "120px" }}
      >
        <Hero />

        <OurMission />

        <Values />

        <Card />
      </Stack>
    </Layout>
  );
};

export default AboutUs;
