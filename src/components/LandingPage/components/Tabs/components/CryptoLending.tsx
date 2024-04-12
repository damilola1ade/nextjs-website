"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

import { Box, Divider, Flex, Tag, Text } from "@chakra-ui/react";

import Image from "next/image";

import { LearnMore } from "@/components/Buttons";

const TagItems = [
  "Neobanks",
  "CeFi & DeFi",
  "Crypto exchanges",
  "Crypto lending",
];
export const CryptoLending = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <Box
      ref={ref}
      textColor="black"
      style={{
        transform: isInView ? "none" : "translateY(10px)",
        opacity: isInView ? 1 : 0,
        filter: isInView ? "blur(0)" : "blur(5px)",
        transition: "all 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.2s",
      }}
    >
      <Flex flexDirection={{ base: "column", lg: "row" }} alignItems="center">
        <Box mt={4} textAlign="start">
          <Text
            fontSize={{ sm: "md", md: "xl", "2xl": "3xl" }}
            fontWeight="bold"
          >
            Crypto lending
          </Text>
          <Text
            w={{ base: "105%", lg: "60%" }}
            mt={8}
            fontSize={{ sm: "sm", md: "lg", "2xl": "2xl" }}
          >
            Increase crypto deposits and conversion rates by understanding
            assets held off other platforms with real time and enriched
            historical data of your users.
          </Text>
          <Divider p={4} w="50%" borderColor="black" />
          <Text
            mt={4}
            fontSize={{ sm: "sm", md: "md", "2xl": "2xl" }}
            fontWeight="bold"
          >
            Industries
          </Text>

          <Box w={{ base: "100%", md: "70%" }}>
            {TagItems.map((tag, index) => (
              <Tag
                fontSize={{ sm: "sm", md: "sm", "2xl": "xl" }}
                p={1.5}
                ml={1}
                mt={2}
                key={index}
                bg="green"
                textColor="white"
              >
                {tag}
              </Tag>
            ))}
          </Box>

          <LearnMore to="/crypto-lending" />
        </Box>

        <Box
          w={{ base: "180px", lg: "512px", "2xl": "640px" }}
          mt={{ base: 0, lg: -12 }}
          ml={{ base: 0, lg: -80 }}
        >
          <Image
            width={500}
            height={500}
            src="/interest_image.webp"
            alt="interest card"
            loading="eager"
          />
        </Box>
      </Flex>
    </Box>
  );
};
