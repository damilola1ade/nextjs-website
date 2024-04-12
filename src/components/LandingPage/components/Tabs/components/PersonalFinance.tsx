"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

import { Box, Divider, Flex, Spacer, Tag, Text } from "@chakra-ui/react";

import Image from "next/image";

import { LearnMore } from "@/components/Buttons";

const TagItems = [
  "Financial dashboard",
  "Crypto lending",
  "Crypto insurance and tax",
];

export const PersonalFinance = () => {
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
            Personal finance
          </Text>
          <Text
            w={{ base: "105%", lg: "80%" }}
            mt={8}
            fontSize={{ sm: "sm", md: "lg", "2xl": "2xl" }}
          >
            Save time by aggregating cryptocurrency data and offer your users
            unique insights to manage their portfolios better so they can make
            smart money decisions.
          </Text>
          <Divider p={4} w="80%" borderColor="black" />
          <Text
            mt={4}
            fontSize={{ sm: "sm", md: "md", "2xl": "2xl" }}
            fontWeight="bold"
          >
            Industries
          </Text>

          <Box w={{ base: "100%", md: "90%" }}>
            {TagItems.map((tag, index) => (
              <Tag
                fontSize={{ sm: "sm", md: "sm", "2xl": "xl" }}
                p={1.5}
                ml={1}
                mt={2}
                key={index}
                bg="#8fc6fa"
                textColor="white"
              >
                {tag}
              </Tag>
            ))}
          </Box>

          <LearnMore to="/personal-finance" />
        </Box>

        <Spacer />
        <Box
          w={{ base: "200px", lg: "960px", "2xl": "1280px" }}
          mt={{ base: 4, lg: 4 }}
        >
          <Image
            width={500}
            height={500}
            src="/transaction_card.webp"
            alt="transaction card"
            loading="eager"
          />
        </Box>
      </Flex>
    </Box>
  );
};
