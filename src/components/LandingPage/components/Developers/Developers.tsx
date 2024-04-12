'use client'

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { Box, Center, Stack, Heading, Text, Flex } from "@chakra-ui/react";
import { SeeDocs } from "@/components/Buttons";
import { CodeSnippet } from "@/components/CodeSnippet";

export const Developers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    // Start animation after 5 seconds
    const timeoutId = setTimeout(() => {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [controls]);

  return (
    <Box bg="#121212" w="100%" position="relative">
      <Flex
        pt={{ base: 12, md: 28, "2xl": 28 }}
        maxW={{ base: "1024px", "2xl": "1320px" }}
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems={{ base: "flex-start", md: "normal" }}
      >
        <Stack p={{ sm: 4, lg: 0 }}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 5 }}
          >
            <Heading
              w={{ base: "100%", md: "100%" }}
              color="white"
              size={{ sm: "lg", md: "2xl", xl: "2xl", "2xl": "3xl" }}
              fontWeight="medium"
              letterSpacing={{ sm: 0, md: -2 }}
              textAlign={{ base: "left", md: "center" }}
            >
              Built with developers in mind
            </Heading>
            <Center>
              <Text
                w={{ base: "100%", md: "40%" }}
                mt={8}
                color="#c5c5c5"
                fontSize={{ sm: "md", md: "md", xl: "lg", "2xl": "2xl" }}
                textAlign={{ base: "left", md: "center" }}
              >
                Implement all Tensfer products with just a few lines of code in
                any language
              </Text>
            </Center>
            <Center mt={8} justifyContent={{base: 'left', lg: 'center'}}>
              <SeeDocs />
            </Center>
          </motion.div>
        </Stack>
        <motion.div
          ref={ref}
          initial={{ opacity: 1, y: -300 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 5 }}
          style={{ width: "100%" }}
        >
          <Box
            w="100%"
            px={{ sm: 1, lg: 0 }}
            py={{ sm: 4, lg: 0 }}
            overflow="hidden"
            mt={{ base: 12, lg: 6, xl: 20 }}
            position="relative"
            top={{ base: 4, lg: 0 }}
          >
            <Box>
              <CodeSnippet />
            </Box>
          </Box>
        </motion.div>
      </Flex>
    </Box>
  );
};
