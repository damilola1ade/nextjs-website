import {
  Box,
  Flex,
  Image,
  Stack,
  Spacer,
  Divider,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

import { Company, Developers, Products, UseCase } from "./components";
import Link from "next/link";

const socialMediaIcons = [
  {
    src: "/x.webp",
    to: "https://twitter.com/tensfer_hq",
    width: { sm: "50px", md: "56px" },
  },
  {
    src: "/linkedin.svg",
    to: "https://www.linkedin.com/company/tensfer/",
    width: { sm: "60px", md: "60px" },
  },
];

const seoItems = [
  { name: "Privacy policy", to: "/privacy" },
  { name: "Cookie policy", to: "/cookie" },
  { name: "Security", to: "/security" },
  { name: "End user agreement", to: "/useragreement" },
];

export const Footer = () => {
  return (
    <Box p={{ base: 4, lg: 0 }} bg="#ddf4ff" pos="sticky" top="10vh">
      <Flex
        flexDirection="column"
        w="100%"
        pt={20}
        maxW={{ base: "1024px", "2xl": "1320px" }}
        mx="auto"
      >
        <Box>
          <Flex>
            <Stack
              spacing={8}
              color="gray.800"
              fontWeight="medium"
              letterSpacing={-0.7}
              fontSize={{ base: "md", lg: "lg", "2xl": "xl" }}
            >
              <Box>
                <Image
                  src="/logo_colored.webp"
                  alt="logo"
                  w={{ base: "80px", lg: "130px" }}
                />
              </Box>

              <Box mt={4}>
                <Text>Tensfer Technologies</Text>
              </Box>

              <Flex gap={2}>
                <Text>USA:</Text>
                <Text>
                  16192 Coastal Highway, Lewes, Delaware 19958, County of
                  Sussex.
                </Text>
              </Flex>
            </Stack>
            <Spacer />
            <Box>
              <Stack spacing="10px" direction="row">
                {socialMediaIcons.map((icon, index) => (
                  <Link key={icon.to} href={icon.to} target="blank">
                    <Image
                      key={index}
                      src={icon.src}
                      w={icon.width}
                      alt="social media icons"
                    />
                  </Link>
                ))}
              </Stack>
            </Box>
          </Flex>
          <Divider h="20px" borderColor="#009be1" />
          <SimpleGrid
            columns={[2, null, 4]}
            spacing="10px"
            justifyContent="space-around"
          >
            <Products />
            <UseCase />
            <Developers />
            <Company />
          </SimpleGrid>
          <Divider h="20px" borderColor="#009be1" />

          <Flex
            h="10vh"
            mt={12}
            flexDir={{ base: "column", lg: "row" }}
            justifyContent="space-between"
          >
            <Box>
              <Text
                fontSize={{ base: "sm", lg: "lg", "2xl": "xl" }}
                fontWeight="medium"
              >
                Copyright 2024 Tensfer, Inc. All rights reserved.
              </Text>
            </Box>

            {/* <Box mt={{ base: 8, lg: 0 }}>
              <Stack direction="row" spacing={6}>
                {seoItems.map((item, idx) => (
                  <Box
                    key={idx}
                    as={Link}
                    href={item.to}
                    target="blank"
                    fontSize={{ base: "xs", lg: "md", "2xl": "lg" }}
                  >
                    {item.name}
                  </Box>
                ))}
              </Stack>
            </Box> */}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
