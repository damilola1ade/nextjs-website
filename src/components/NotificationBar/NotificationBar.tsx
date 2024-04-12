"use client";

import { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { MdArrowOutward } from "react-icons/md";

import Image from "next/image";

import Link from "next/link";

export const NotificationBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);


  // const blog = data?.data?.filter(
  //   (item: { attributes: { isFeatured: boolean } }) =>
  //     item.attributes.isFeatured
  // );

  // const featuredBlog = blog?.reduce(
  //   (
  //     prev: { attributes: { createdAt: string | number | Date } },
  //     current: { attributes: { createdAt: string | number | Date } }
  //   ) => {
  //     if (!prev) return current;
  //     const prevCreatedAt = new Date(prev.attributes.createdAt);
  //     const currentCreatedAt = new Date(current.attributes.createdAt);
  //     return prevCreatedAt > currentCreatedAt ? prev : current;
  //   },
  //   null
  // );

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
    0.1 * (typeof window !== "undefined" ? window.innerHeight : 0);

  return (
    <Flex
      h="40px"
      bg="#c5ebfc"
      transform={`translateY(${shouldSlideUp ? "-100%" : "0"})`}
      pb={shouldSlideUp ? "-200px" : "0px"}
      transition="transform 0.3s ease"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      justifyContent="space-between"
      alignItems={{ base: "center", lg: "center" }}
    >
      <Box display={{ base: "none", lg: "flex" }}>
        <Image
          src="/banner-pattern1.svg"
          width={180}
          height={180}
          alt="banner1"
        />
      </Box>
      {/* {featuredBlog && (
        <Flex
          as={Link}
          href={`/blog/${featuredBlog?.attributes?.slug}`}
          justifyContent="center"
          color="black"
          fontSize={{ base: "12px", lg: "md", "2xl": "lg" }}
          fontWeight="semibold"
          w={{ base: "100%", lg: "auto" }}
          gap={{ base: 1, lg: 3 }}
          style={{
            textDecoration: "none",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.textDecoration = "underline";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.textDecoration = "none";
          }}
        >
          <Box textAlign="center">{featuredBlog?.attributes?.title}</Box>
          <Box mt={1}>
            <MdArrowOutward />
          </Box>
        </Flex>
      )} */}

      <Box display={{ base: "none", lg: "flex" }}>
        <Image
          src="/banner-pattern2.svg"
          width={180}
          height={180}
          alt="banner2"
        />
      </Box>
    </Flex>
  );
};
