'use client'

import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  Stack,
  Icon,
  Divider,
} from "@chakra-ui/react";

import { VscRepoForked } from "react-icons/vsc";
import { PiCurrencyBtcFill } from "react-icons/pi";
import Link from "next/link";

const children = [
  {
    icon: VscRepoForked,
    title: "Account aggregation",
    body: "Safely access the broadest range of crypto data sources.",
    to: "/account-aggregation",
  },
  {
    icon: PiCurrencyBtcFill,
    title: "Pay with crypto",
    body: "Let your customers pay from their existing accounts.",
    to: "/pay-with-crypto",
  },
];

export const Products = () => {
  const [showBox, setShowBox] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    setShowBox(true);
  };

  const handleContainerMouseLeave = () => {
    setIsHovering(false);
    setShowBox(false);
  };

  return (
    <>
      <VStack spacing={4}>
        <Button
          variant="none"
          fontSize={{ base: "md", "2xl": "xl" }}
          rightIcon={
            <Box className={showBox && isHovering ? "icon-up" : "icon-down"}>
              <SlArrowDown size={10} />
            </Box>
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleContainerMouseLeave}
          textColor={showBox && isHovering ? "blue" : "black"}
        >
          Products
        </Button>
        {showBox && isHovering && (
          <Box
            w="100%"
            zIndex={1}
            mt={9}
            right={0}
            pos="absolute"
            bg="white"
            p={12}
            border="1px"
            borderColor="gray.100"
            borderBottomRadius="xl"
            boxShadow="md"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleContainerMouseLeave}
          >
            <Box
              maxW={{ base: "1024px", "2xl": "1320px" }}
              alignItems="center"
              mx="auto"
            >
              <Stack direction="row" spacing={12}>
                <Stack spacing={4}>
                  <Heading
                    size={{ base: "lg", "2xl": "lg" }}
                    color="black"
                    letterSpacing={-1}
                  >
                    Products
                  </Heading>
                  <Text
                    maxW="360px"
                    fontSize={{ base: "md", "2xl": "xl" }}
                    color="black"
                  >
                    How you can make the most out of our products
                  </Text>
                </Stack>
                <Divider
                  orientation="vertical"
                  variant="solid"
                  border="1px"
                  borderColor="gray.300"
                  h="200px"
                />
                <Box w="100%">
                  <Stack
                    
                    direction="row"
                    spacing={16}
                  >
                    {children.map((item, index) => (
                      <Stack as={Link} href={item.to} key={item.to}>
                        <Box _hover={{ color: "#0d30bc" }}>
                          <Flex onClick={() => setShowBox(false)}>
                            <Icon
                              fontSize={{ base: "3xl", "2xl": "4xl" }}
                              as={item.icon}
                              transform={index === 0 ? "rotate(90deg)" : "auto"}
                            />
                            <Box ml={4}>
                              <Text
                                w="full"
                                fontSize={{ base: "md", "2xl": "xl" }}
                                fontWeight="bold"
                              >
                                {item.title}
                              </Text>
                              <Text
                                mt={2}
                                maxW="320px"
                                fontSize={{ base: "md", "2xl": "xl" }}
                                color="color"
                              >
                                {item.body}
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Box>
        )}
      </VStack>
    </>
  );
};
