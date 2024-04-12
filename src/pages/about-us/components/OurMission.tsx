import { Flex, Text, Stack, Box } from "@chakra-ui/react";
// import { TypingText } from "../../../hooks/CustomTexts";
import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <Flex mt={{ base: 0, lg: 8 }} maxW={{ base: "1024px", "2xl": "1320px" }}>
      <Stack direction="column" spacing={{ base: 8, lg: 6 }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <Text
            fontSize={{ sm: "md", md: "2xl", xl: "3xl" }}
            fontWeight="semibold"
          >
            {/* <TypingText title="OUR MISSION" /> */}
          </Text>
        </motion.div>

        <Text
          w={{ base: "100%", lg: "75%" }}
          fontSize={{ sm: "md", md: "lg", lg: "2xl", "2xl": "3xl" }}
        >
          At Tensfer we provide the infrastructure layer that powers the next
          wave of financial innovation, by unlocking the power of embedded
          crypto transfers and account connectivity. We connect to thousands of
          crypto exchanges and wallets using a secure open API, removing the
          complexity and enabling seamless access to crypto data and payment
          infrastructure.
        </Text>

        <Box pos="relative" mt={{ base: 4, lg: 24 }}>
          <Box
            position="relative"
            paddingBottom="64.67065868263472%"
            height="0"
          >
            <iframe
              src="https://www.loom.com/embed/4e5fc92b8c544341967b2b61af4d39f4?sid=ba153130-f204-4b26-a575-f384eed5fcc1"
              frameBorder="0"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "70%",
                borderRadius: "10px",
              }}
            ></iframe>
          </Box>
        </Box>
      </Stack>
    </Flex>
  );
};

export default OurMission
