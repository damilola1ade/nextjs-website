import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { BiPhone, BiSolidUpArrow } from "react-icons/bi";
import { TiInfoLargeOutline } from "react-icons/ti";
import { GiPriceTag } from "react-icons/gi";

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
    icon: TiInfoLargeOutline,
    title: "About us",
    body: "Learn more about Tensfer",
    to: "/about-us",
  },
  {
    icon: GiPriceTag,
    title: "Pricing",
    body: "Flexible pricing for business needs",
    to: "/pricing",
  },
  {
    icon: BiPhone,
    title: "Contact us",
    body: "Get in touch with our sales team",
    to: "/contact-us",
  },
];

export const Company = () => {
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
          Company
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
                    Company
                  </Heading>
                  <Text
                    w="250px"
                    fontSize={{ base: "md", "2xl": "xl" }}
                    color="black"
                  >
                    Learn more about Tensfer
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
                  <SimpleGrid columns={2} spacing={12}>
                    {children.map((item) => (
                      // eslint-disable-next-line react/jsx-key
                      <Stack as={Link} href={item.to}>
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
                                w="500px"
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
