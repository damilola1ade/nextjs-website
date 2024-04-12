"use client";

import { ReactNode, useState, useEffect } from "react";

import {
  Box,
  Flex,
  IconButton,
  Divider,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Center,
  Icon,
} from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscReferences, VscRepoForked } from "react-icons/vsc";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaGoogleWallet } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { FaConnectdevelop } from "react-icons/fa";
import { LuCoins } from "react-icons/lu";
// import { MdNotStarted } from "react-icons/md";
// import { VscReferences } from "react-icons/vsc";
import { TiInfoLargeOutline } from "react-icons/ti";
import { GiPriceTag } from "react-icons/gi";

import { ScheduleADemo } from "../Buttons";
import { Blog, Company, Developers, Products, UseCase } from "./components";
import Link from "next/link";

interface NavbarProps {
  bg?: string;
  src?: string;
  textColor?: string;
  children?: ReactNode;
  className?: string;
  id?: string;
  style?: any;
  RequestButhrefn?: any;
}

const productLinks = [
  {
    text: "Account Aggregation",
    icon: VscRepoForked,
    href: "/account-aggregation",
  },
  {
    text: "Pay with Crypto",
    icon: PiCurrencyBtcFill,
    href: "/pay-with-crypto",
  },
];

const useCaseLinks = [
  {
    text: "Crypto Exchange",
    icon: BsCurrencyExchange,
    href: "/crypto-exchange",
  },
  {
    text: "Crypto Lending",
    icon: FaGoogleWallet,
    href: "/crypto-lending",
  },
  {
    text: "Personal Finance",
    icon: GiWallet,
    href: "/personal-finance",
  },
  { text: "CeFi and DeFi", icon: FaConnectdevelop, href: "/defi" },
  { text: "Crypto Tax", icon: LuCoins, href: "/crypto-tax" },
];

const developerLinks = [
  {
    text: "API documentation",
    icon: VscReferences,
    href: "https://docs.tensfer.co",
  },
];

const companyLinks = [
  { text: "About us", icon: TiInfoLargeOutline, href: "/about-us" },
  { text: "Pricing", icon: GiPriceTag, href: "/pricing" },
];

export const Navbar: React.FC<NavbarProps> = ({
  textColor,
  children,
  style,
  className,
  id,
}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const hrefggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const shouldSlideUp =
    scrollPosition >
    0.005 * (typeof window !== "undefined" ? window.innerHeight : 0);

  return (
    <Flex
      className={className}
      id={id}
      bg="white"
      style={style}
      textColor={textColor}
      pos="fixed"
      transform={`translateY(${shouldSlideUp ? "0px" : "40px"})`}
      top={shouldSlideUp ? "0" : "0px"}
      transition="transform 0.3s ease"
      justifyContent="space-around"
      width="100%"
      zIndex={10}
      p={{ base: 0, "2xl": 2 }}
      flexDirection={{ sm: "column", lg: "row" }}
      boxShadow={{ base: "md", lg: "sm" }}
    >
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        as="nav"
        p={2}
        maxW={{ base: "1024px", "2xl": "1320px" }}
      >
        <Box as={Link} href="/" onClick={() => setShowMobileMenu(false)}>
          <Image
            src="/logo_colored.webp"
            alt="logo"
            w={{ base: "80px", lg: "100px", "2xl": "130px" }}
          />
        </Box>

        <Box display={{ base: "none", lg: "flex" }}>
          <Products />
          <UseCase />
          {/* <Resources /> */}
          <Developers />
          <Company />
          <Blog />
        </Box>

        <Box display={{ base: "none", lg: "flex" }}>
          <ScheduleADemo
            p={{ base: 0, md: 6 }}
            bg="#c0ebff"
            textColor={"#08338f"}
            text={"Request Access"}
            textTransform="uppercase"
            _hover={{ bg: "#c0ebff", textColor: "#08338f" }}
            fontSize={{ base: "sm", md: "md" }}
          />
        </Box>
        <IconButton
          icon={
            showMobileMenu ? (
              <IoMdClose size={18} />
            ) : (
              <GiHamburgerMenu size={18} />
            )
          }
          variant="none"
          display={{ base: "flex", lg: "none" }}
          onClick={hrefggleMobileMenu}
          aria-label={""}
        />
      </Flex>

      {showMobileMenu && (
        <VStack
          mt={4}
          bg="white"
          spacing={8}
          py={4}
          display={{ base: "flex", lg: "none" }}
          alignItems="right"
          position="relative"
          minHeight="100vh"
          overflowY="scroll"
          width="100%"
          zIndex={20}
        >
          <Box pl={4}>
            <Text fontSize="sm" color="gray.600">
              Products
            </Text>
            <SimpleGrid columns={2} spacing={6} pt={2} pl={2}>
              {productLinks.map((link, index) => (
                <Flex
                  key={index}
                  as={Link}
                  href={link.href}
                  onClick={() => setShowMobileMenu(false)}
                >
                  <Box>
                    <Icon fontSize="lg" as={link.icon} />
                  </Box>
                  <Stack>
                    <Text
                      ml={1}
                      w="full"
                      fontSize={{ base: "sm", "2xl": "md" }}
                      fontWeight="semibold"
                      color="black"
                    >
                      {link.text}
                    </Text>
                  </Stack>
                </Flex>
              ))}
            </SimpleGrid>
          </Box>

          <Divider w="full" h="10px" borderColor="gray.500" />

          <Box pl={4}>
            <Text fontSize="sm" color="gray.600">
              Use cases
            </Text>
            <SimpleGrid columns={2} spacing={8} pt={2} pl={2}>
              {useCaseLinks.map((link, index) => (
                <Flex
                  key={index}
                  as={Link}
                  href={link.href}
                  onClick={() => setShowMobileMenu(false)}
                >
                  <Box>
                    <Icon fontSize="lg" as={link.icon} />
                  </Box>
                  <Stack>
                    <Text
                      ml={1}
                      w="full"
                      fontSize={{ base: "sm", "2xl": "md" }}
                      fontWeight="semibold"
                      color="black"
                    >
                      {link.text}
                    </Text>
                  </Stack>
                </Flex>
              ))}
            </SimpleGrid>
          </Box>

          <Divider w="full" h="10px" borderColor="gray.500" />

          <Box pl={4}>
            <Text fontSize="sm" color="gray.600">
              Developers
            </Text>
            <SimpleGrid columns={2} spacing={-2} pt={2} pl={2}>
              {developerLinks.map((link, index) => (
                <Flex
                  key={index}
                  as={Link}
                  href={link.href}
                  onClick={() => setShowMobileMenu(false)}
                  target="blank"
                >
                  <Box>
                    <Icon fontSize="lg" as={link.icon} />
                  </Box>
                  <Stack>
                    <Text
                      ml={1}
                      w="full"
                      fontSize={{ base: "sm", "2xl": "md" }}
                      fontWeight="semibold"
                      color="black"
                    >
                      {link.text}
                    </Text>
                  </Stack>
                </Flex>
              ))}
            </SimpleGrid>
          </Box>

          <Divider w="full" h="10px" borderColor="gray.500" />

          <Box pl={4}>
            <Text fontSize="sm" color="gray.600">
              Company
            </Text>
            <SimpleGrid columns={2} spacing={6} pt={2} pl={2}>
              {companyLinks.map((link, index) => (
                <Flex
                  key={index}
                  as={Link}
                  href={link.href}
                  onClick={() => setShowMobileMenu(false)}
                >
                  <Box>
                    <Icon fontSize="lg" as={link.icon} />
                  </Box>
                  <Stack>
                    <Text
                      ml={1}
                      w="full"
                      fontSize={{ base: "sm", "2xl": "md" }}
                      fontWeight="semibold"
                      color="black"
                    >
                      {link.text}
                    </Text>
                  </Stack>
                </Flex>
              ))}
            </SimpleGrid>
          </Box>

          <Divider w="full" h="10px" borderColor="gray.500" />

          <Center pb={12}>
            <ScheduleADemo
              bg="#c0ebff"
              textColor={"#08338f"}
              text={"Request Access"}
              textTransform="uppercase"
            />
          </Center>
        </VStack>
      )}
      {children}
    </Flex>
  );
};
