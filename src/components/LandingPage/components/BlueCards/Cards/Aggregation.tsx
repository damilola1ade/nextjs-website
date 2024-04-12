import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { LearnMore } from "@/components/Buttons";

export const Aggregation = () => {
  // const boxRef = useRef(null);
  // const imageRef = useRef(null);

  // const isBoxInView = useInView(boxRef, { once: true });
  // const isImageInView = useInView(imageRef, { once: true });

  return (
    <Box
      minH="520px"
      // ref={boxRef}
      mt={2}
      p={{ sm: 8, lg: 12 }}
      bg="#c9e9f6"
      borderRadius="xl"
      textColor="black"
    >
      <Flex
        flexDirection={{ base: "column-reverse", lg: "row-reverse" }}
        alignItems="center"
      >
        <Box mt={12} w={{ base: "250px", lg: "960px" }}>
          <Image
            width={500}
            height={500}
            src="/aggregate.webp"
            alt="blue card"
            loading="lazy"
          />
        </Box>

        <Box mt={4} textAlign="left" ml={{ base: 0, md: 2 }}>
          <Text fontSize={{ sm: "md", md: "xl", "2xl": "2xl" }}>
            Aggregation
          </Text>
          <Text
            mt={4}
            fontSize={{ sm: "md", md: "xl", "2xl": "3xl" }}
            fontWeight="bold"
          >
            Connect to the data you need
          </Text>
          <Text
            w={{ base: "100%", lg: "85%" }}
            mt={8}
            fontSize={{ sm: "sm", md: "lg", "2xl": "2xl" }}
          >
            Give your users a single view of their portfolio by aggregating
            assets, balance and transaction data across all of their accounts.{" "}
            <br />
            Enable transaction analysis for your customers so they can make
            informed trading decisions.
          </Text>

          <LearnMore to="/account-aggregation" />
        </Box>
      </Flex>
    </Box>
  );
};
