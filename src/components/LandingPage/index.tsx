// import { Helmet } from "react-helmet-async";
import { Box, Stack } from "@chakra-ui/react";

import {
  Hero,
  BlueCards,
  Tabs,
  Coverage,
  Developers,
  Cards,
  AboveFooter,
  Video,
  FAQ,
} from "./components";

export const LandingPage = () => {
  return (
    <>
      {/* <Helmet>
        <title>Tensfer</title>
        <meta
          name="description"
          content="The safer way to onboard users, link a wallet, deposit crypto and pay with crypto."
        />
        <link rel="canonical" href="https://tensfer.co/" />
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

        {/* <TrustedBy /> */}

        <Box maxW={{ base: "1024px", "2xl": "1320px" }}>
          <BlueCards />
        </Box>

        <Box maxW={{ base: "1024px", "2xl": "1320px" }}>
          <Tabs />
        </Box>

        <Cards />

        <Coverage />

        <Video />
      </Stack>

      <Developers />

      <FAQ />

      <AboveFooter />
    </>
  );
};
