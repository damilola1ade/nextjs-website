import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { BiSolidUpArrow } from "react-icons/bi";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaGoogleWallet } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { FaConnectdevelop } from "react-icons/fa";
import { LuCoins } from "react-icons/lu";

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
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";

const children = [
  {
    icon: BsCurrencyExchange,
    title: "Crypto exchange",
    body: "Leverage account to account payments",
    to: "/crypto-exchange",
  },
  {
    icon: FaGoogleWallet,
    title: "Crypto lending",
    body: "Understand assets held off platform",
    to: "/crypto-lending",
  },
  {
    icon: GiWallet,
    title: "Personal finance",
    body: "Track digital assets",
    to: "/personal-finance",
  },
  {
    icon: FaConnectdevelop,
    title: "DeFi",
    body: "Grow user assets",
    to: "/defi",
  },
  {
    icon: LuCoins,
    title: "Crypto tax",
    body: "Tax report tool for your users",
    to: "/crypto-tax",
  },
];

export const UseCase = () => {
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
          Use case
        </Button>
        {showBox && isHovering && (
          <Box
            w="100%"
            zIndex={1}
            mt={9}
            right={0}
            pos="absolute"
            bg="white"
            border="1px"
            borderColor="gray.100"
            p={12}
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
              <Box
                pos="absolute"
                left={{ base: "21.6rem", "2xl": "30.7rem" }}
                top={-4}
              >
                <Icon color="white">
                  <BiSolidUpArrow size={30} />
                </Icon>
              </Box>

              <Stack direction="row" spacing={12}>
                <Stack spacing={4}>
                  <Heading
                    size={{ base: "lg", "2xl": "lg" }}
                    color="black"
                    letterSpacing={-1}
                  >
                    Use case
                  </Heading>
                  <Text
                    maxW="360px"
                    fontSize={{ base: "md", "2xl": "xl" }}
                    color="black"
                  >
                    Learn how to use our products
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
                  <SimpleGrid columns={3} spacing={12}>
                    {children.map((item) => (
                      <Stack as={Link} href={item.to} key={item.to}>
                        <Box _hover={{ color: "#0d30bc" }}>
                          <Flex onClick={() => setShowBox(false)}>
                            <Icon
                              fontSize={{ base: "3xl", "2xl": "4xl" }}
                              as={item.icon}
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
                  </SimpleGrid>
                </Box>
              </Stack>
            </Box>
          </Box>
        )}
      </VStack>
    </>
  );
};
