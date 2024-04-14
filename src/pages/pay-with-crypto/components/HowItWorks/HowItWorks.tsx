"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Circle,
  Flex,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

import { TypingText } from "@/hooks/CustomTexts";

import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { FirstImage, LastImage, SecondImage, ThirdImage } from "./components";

const payWithCryptoData = [
  {
    id: "01",
    title: "Obtain user consent",
    body: "Customers are given information about the process and give Tensfer informed consent to process and authenticate their credntials.",
  },
  {
    id: "02",
    title: "Select wallet",
    body: "Your customers can select their preferred choice from the widest coverage of self custody wallets and exchanges.",
  },
  {
    id: "03",
    title: "Authenticate ownership",
    body: "Your customers verify with their credentials and connect their preferred exchange or wallet to your app in seconds.",
  },
  {
    id: "04",
    title: "Make payment",
    body: "Customers can select assets, select network, review payments and send payments in seconds.",
  },
];

const HowItWorks = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [progressValue, setProgressValue] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const intervalDuration = 10000; // 10 seconds

  useEffect(() => {
    const newIntervalId = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % payWithCryptoData.length
      );
    }, intervalDuration);

    setIntervalId(newIntervalId as unknown as number | null);

    return () => clearInterval(newIntervalId); // Cleanup the interval on component unmount
  }, []);

  // Update progress value based on selectedTabIndex and isHovered
  useEffect(() => {
    setProgressValue(0); // Reset progress value
    const progressIntervalId = setInterval(() => {
      setProgressValue((prevValue) => (prevValue + 1) % 102); // Increment progress value from 0 to 100
    }, intervalDuration / 102); // Adjust interval for smooth progress animation

    return () => clearInterval(progressIntervalId); // Cleanup the progress interval on tab change
  }, [intervalDuration, currentIndex]);

  const handleAccordionButtonClick = (index: number) => {
    setCurrentIndex(index);

    // Clear existing interval if it exists
    if (intervalId !== null) {
      clearInterval(intervalId);
    }

    // Start a new interval
    const newIntervalId = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % payWithCryptoData.length
      );
    }, intervalDuration);

    setIntervalId(newIntervalId as unknown as number | null);
  };

  return (
    <Box
      w={{ base: "auto", lg: "100%" }}
      bg="#f4f6f8"
      h={{ base: "110vh", xl: "100vh" }}
      p={{ base: 4, lg: 12 }}
      borderRadius="2xl"
    >
      <Flex
        maxW={{ base: "1024px", "2xl": "1320px" }}
        minW={{ base: "1024px", "2xl": "1320px" }}
        mx="auto"
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={{ base: "center", lg: "space-evenly" }}
        alignItems={{ base: "center", lg: "normal" }}
      >
        <Box>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <Flex>
              <Text
                mb={12}
                fontWeight="medium"
                fontSize={{ base: "lg", "2xl": "xl" }}
                letterSpacing={-1}
                zIndex={2}
              >
                HOW IT WORKS
              </Text>
              <Box
                bg="purple.100"
                h="15px"
                w="110px"
                borderRadius="full"
                pos="absolute"
                ml={1}
                mt={2}
                opacity={0.9}
              />
            </Flex>
          </motion.div>

          <Accordion
            allowToggle
            index={currentIndex}
            minW={{ base: "400px", "2xl": "500px" }}
            maxW={{ base: "400px", "2xl": "560px" }}
          >
            {payWithCryptoData.map((item, index) => (
              <AccordionItem
                key={item.id}
                bg={index === currentIndex ? "white" : "default"}
                mb={4}
                borderRadius="lg"
                boxShadow={index === currentIndex ? "md" : "none"}
                transition="ease-in 0.5s"
              >
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      onClick={() => handleAccordionButtonClick(index)}
                      p={5}
                      borderRadius="lg"
                      _hover={{ bg: "none" }}
                    >
                      <Stack
                        flex="1"
                        direction="row"
                        textAlign="left"
                        alignItems="center"
                      >
                        <Circle
                          px={2}
                          bg="purple.100"
                          textColor="black"
                          borderRadius="full"
                          fontSize="md"
                          fontWeight="bold"
                        >
                          {item.id}
                        </Circle>
                        <Text
                          fontWeight="semibold"
                          fontSize={{ base: "md", "2xl": "2xl" }}
                          letterSpacing={-0.7}
                        >
                          {item.title}
                        </Text>
                      </Stack>
                      {isExpanded ? (
                        <IoIosArrowForward size={20} />
                      ) : (
                        <IoIosArrowDown size={20} />
                      )}
                    </AccordionButton>
                    <AccordionPanel
                      mt={-3}
                      ml={10}
                      pb={4}
                      textColor="gray.600"
                      fontWeight="medium"
                      fontSize={{ base: "sm", "2xl": "xl" }}
                    >
                      {item.body}
                    </AccordionPanel>
                    {index === currentIndex ? (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progressValue}%` }}
                        exit={{ width: 0 }}
                        transition={{ duration: 0.2, ease: "linear" }}
                        style={{
                          height: "4px",
                          background: "#08338e",
                          borderRadius: "2px",
                          marginTop: "-2px", // adjust to vertically align with the accordion panel
                        }}
                      />
                    ) : null}
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>

        <Flex
          w="40%"
          bg="#e9edf8"
          bgImage="/pattern.svg"
          bgSize="cover"
          bgBlendMode="multiply"
          h={{ base: "300px", md: "480px", "2xl": "600px" }}
          borderRadius="2xl"
          position="relative"
          justifyContent="center"
          overflow="hidden"
        >
          <Center mt={{ base: 32, lg: 40, "2xl": 60 }}>
            {currentIndex === 0 && <FirstImage />}
            {currentIndex === 1 && <SecondImage />}
            {currentIndex === 2 && <ThirdImage />}
            {currentIndex === 3 && <LastImage />}
          </Center>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HowItWorks;
