"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

import { Box, Divider, Flex, Spacer, Tag, Text } from "@chakra-ui/react";

import Image from "next/image";

import { LearnMore } from "@/components/Buttons";

const TagItems = ["Crypto exchanges", "Neobanks", "Self-custody wallets"];

export const Payment = () => {
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
        <Box textAlign="start">
          <Text
            fontSize={{ sm: "md", md: "xl", "2xl": "3xl" }}
            fontWeight="bold"
          >
            Payment
          </Text>
          <Text
            w={{ base: "105%", lg: "50%" }}
            mt={8}
            fontSize={{ sm: "sm", md: "lg", "2xl": "2xl" }}
          >
            Boost your revenue and reduce dropout rates at the checkout by
            allowing your users to make simple and secure payments directly from
            their wallets.
          </Text>
          <Divider p={4} w="50%" borderColor="black" />
          <Text
            mt={4}
            fontSize={{ sm: "sm", md: "md", "2xl": "2xl" }}
            fontWeight="bold"
          >
            Industries
          </Text>

          <Box w={{ base: "100%", lg: "90%" }}>
            {TagItems.map((tag, index) => (
              <Tag
                fontSize={{ sm: "sm", md: "sm", "2xl": "xl" }}
                p={1.5}
                ml={1}
                mt={2}
                key={index}
                bg="#eb996e"
                textColor="white"
              >
                {tag}
              </Tag>
            ))}
          </Box>

          <LearnMore to="/pay-with-crypto" />
        </Box>

        <Spacer />

        <Box
          w={{ base: "200px", lg: "540px", "2xl": "768px" }}
          mt={{ base: 4, lg: 4 }}
          ml={{ base: 0, lg: -80 }}
        >
          <Image
            width={500}
            height={500}
            src="/payment_image.webp"
            alt="payment card"
            loading="eager"
          />
        </Box>
      </Flex>
    </Box>
  );
};
