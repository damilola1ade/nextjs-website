/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
'use client'

import {
  Box,
  Flex,
  Circle,
  Text,
  Stack,
  Divider,
} from "@chakra-ui/react";

import Image from "next/image";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const CodeSnippet = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const numbers = Array.from({ length: 16 }, (_, index) => index + 1);

  return (
    <Box
      w="100%"
      bg="#1e1e1e"
      borderTopLeftRadius="xl"
      borderTopRightRadius="xl"
      fontSize={{ base: "8.5px", lg: "xl" }}
    >
      <Box overflowX="auto">
        <Box bg="#2d2d2d" borderTopLeftRadius="xl" borderTopRightRadius="xl">
          <Flex
            alignItems="center"
            px={{ base: 4, lg: 6 }}
            py={{ base: 3, lg: 5 }}
            justifyContent="space-between"
          >
            <Stack direction="row">
              <Circle bg="#ec6a5e" size={{ base: "5px", lg: "12px" }} />
              <Circle bg="#f5bf4f" size={{ base: "5px", lg: "12px" }} />
              <Circle bg="#61c554" size={{ base: "5px", lg: "12px" }} />
            </Stack>

            <Text color="white">Tensfer - SDK Integration</Text>
            <Text />
          </Flex>
        </Box>
        <Divider borderColor="#353535" />
        <Box position="relative" color="white" bg="#252526">
          <Flex>
            <Box
              px={{ base: 4, lg: 6 }}
              py={{ base: 2, lg: 3 }}
              bg="#1e1e1e"
              w={{ base: "100px", lg: "160px" }}
              textAlign="center"
            >
              <Flex gap={3} alignItems="center">
                <Image
                  src='./reactlogo.svg'
                  width={10}
                  height={10}
                  alt="react logo"
                />
                <Text>direct.tsx</Text>
              </Flex>
            </Box>

            <Box
              px={{ base: 4, lg: 6 }}
              py={{ base: 2, lg: 3 }}
              bg="#2d2d2d"
              w={{ base: "100px", lg: "160px" }}
              textAlign="center"
            >
              <Flex gap={3} alignItems="center">
                <Image
                  src='/reactlogo.svg'
                  width={10}
                  height={10}
                  alt="react logo"
                />
                <Text>build.tsx</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Flex p={{ base: 3, lg: 6 }} ml={3} gap={4}>
          <Stack color="white" opacity={0.3}>
            {numbers.map((number) => (
              <div key={number}>{number}</div>
            ))}
          </Stack>
          <Stack>
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
            >
              <Flex gap={1} color="white">
                <Text>Tensfer.</Text>
                <Text color="purple.400">linkWithOptions</Text>
                <Text>({"{"}</Text>
              </Flex>
            </motion.div>

            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
            >
              <Flex gap={1} color="white" ml={6}>
                <Text color="#6ab2e0">livePublicKey:</Text>
                <Text>" ",</Text>
                <Text color="gray" ml={2}>
                  / / Your public key from the Tensfer dashboard
                </Text>
              </Flex>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 2 }}
            >
              <Stack>
                <Flex gap={1} color="white" ml={6}>
                  <Text color="purple.400">onSuccess</Text>
                  <Text>:</Text>
                  <Text color="red.500" ml={2}>
                    function
                  </Text>
                  <Text>( data ) &nbsp; {"{"}</Text>
                </Flex>
                <Flex gap={1} color="white" ml={20}>
                  <Text>console</Text>
                  <Text>.</Text>
                  <Text color="purple.400">log</Text>
                  <Text>( "Success!", &nbsp;&nbsp;data )&nbsp;;</Text>
                </Flex>
                <Flex gap={1} color="white" ml={6}>
                  <Text>{"}"}&nbsp;,</Text>
                </Flex>
              </Stack>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 3 }}
            >
              <Stack>
                <Flex gap={1} color="white" ml={6}>
                  <Text color="purple.400">onError</Text>
                  <Text>:</Text>
                  <Text color="red.500" ml={2}>
                    function
                  </Text>
                  <Text>( data ) &nbsp; {"{"}</Text>
                </Flex>

                <Flex gap={1} color="white" ml={20}>
                  <Text color="gray">// an error occured</Text>
                </Flex>

                <Flex gap={1} color="white" ml={20}>
                  <Text>console</Text>
                  <Text>.</Text>
                  <Text color="purple.400">log</Text>
                  <Text>( "Error!", &nbsp;&nbsp;data )&nbsp;;</Text>
                </Flex>

                <Flex gap={1} color="white" ml={6}>
                  <Text>{"}"}&nbsp;,</Text>
                </Flex>
              </Stack>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 3 }}
            >
              <Stack>
                {" "}
                <Flex gap={1} color="white" ml={6}>
                  <Text color="purple.400">onClose</Text>
                  <Text>:</Text>
                  <Text color="red.500" ml={2}>
                    function
                  </Text>
                  <Text>( ) &nbsp; {"{"}</Text>
                </Flex>
                <Flex gap={1} color="white" ml={20}>
                  <Text color="gray">// user closed widget</Text>
                </Flex>
                <Flex gap={1} color="white" ml={20}>
                  <Text>console</Text>
                  <Text>.</Text>
                  <Text color="purple.400">log</Text>
                  <Text>( "user closed widget" )&nbsp;;</Text>
                </Flex>
                <Flex gap={1} color="white" ml={6}>
                  <Text>{"}"}&nbsp;,</Text>
                </Flex>
                <Flex gap={1} color="white">
                  <Text>{"})"}&nbsp;;</Text>
                </Flex>
              </Stack>
            </motion.div>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};
