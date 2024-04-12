"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoMdArrowForward } from "react-icons/io";

import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  Stack,
  Text,
  Flex,
  Input,
  Textarea,
  Center,
  ResponsiveValue,
} from "@chakra-ui/react";

import Image from "next/image";

import Lottie from "lottie-react";

import success from "../../../public/success.json";
import loading from "../../../public/loading.json";

import { useFormValidation } from "@/hooks/useFormValidation";
import { TypingText } from "@/hooks/CustomTexts";

type Inputs = {
  fullName: string;
  email: string;
  reason: string;
};

type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase";

interface ButtonProps {
  p?: { base: number; md: number };
  bg?: string;
  w?: string;
  bgGradient?: string;
  textColor: string;
  fontSize?: { base: string; md: string };
  textTransform?: ResponsiveValue<TextTransform>;
  variant?: string;
  text: string;
  border?: string;
  borderColor?: string;
  _hover?: {
    bg?: string;
    bgGradient?: string;
    textColor: string;
    border?: string;
    borderColor?: string;
  };
}

export const ScheduleADemo: React.FC<ButtonProps> = ({
  w,
  bg,
  bgGradient,
  textColor,
  textTransform,
  variant,
  text,
  border,
  borderColor,
  p = { base: 5, md: 8 },
  fontSize = { base: "sm", md: "lg" },
  _hover,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { emailValidation } = useFormValidation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const resetForm = () => {
    reset();
    setIsSuccess(false);
  };

  const onOpenModal = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    onOpen();
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setIsLoading(true);

      const apiEndpoint = "https://dashapi.tensfer.co/api/v1/auth/waitlist";
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        setIsSuccess(true);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={onOpenModal}
        bg={bg}
        w={w}
        bgGradient={bgGradient}
        textColor={textColor}
        textTransform={textTransform}
        variant={variant}
        style={{ borderColor: borderColor }}
        p={p}
        borderRadius={{ base: "lg", md: "xl" }}
        border={border}
        fontSize={fontSize}
        _hover={_hover}
      >
        {text}
      </Button>

      <Modal
        isOpen={isOpen}
        closeOnOverlayClick={false}
        isCentered
        onClose={() => {
          onClose();
          resetForm();
        }}
        size="4xl"
      >
        <ModalOverlay />
        <ModalContent borderRadius="lg">
          <ModalCloseButton />
          <ModalBody
            as={Flex}
            p={4}
            minH="500px"
            justifyContent="center"
            alignItems="center"
          >
            {isLoading === true && (
              <Flex alignContent="center" justifyContent="center">
                <Box>
                  <Lottie
                    animationData={loading}
                    style={{ height: 80 }}
                    loop={true}
                  />
                </Box>
              </Flex>
            )}

            {isSuccess === true && (
              <Flex flexDir="column" justifyContent="center">
                <Lottie
                  animationData={success}
                  style={{ height: 100 }}
                  loop={true}
                />

                <Center flexDir="column">
                  <Heading fontWeight="bold" letterSpacing={-1}>
                    Request successfully sent!
                  </Heading>
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                  >
                    <Heading
                      mt={4}
                      size={{ base: "sm", lg: "md", "2xl": "lg" }}
                      fontWeight="normal"
                      letterSpacing={-1}
                      textTransform="uppercase"
                    >
                      <TypingText title="You are on the waitlist" />
                    </Heading>
                  </motion.div>
                </Center>
              </Flex>
            )}

            {isSuccess === false && isLoading === false && (
              <Stack direction={{ base: "column", lg: "row" }}>
                <Center
                  position="relative"
                  top={{ base: 12, md: 0 }}
                  borderTopLeftRadius="lg"
                  borderBottomLeftRadius="lg"
                  w={{ base: "100px", lg: "auto" }}
                  alignItems='center'
                  justifyContent='center'
                >
                  <Image
                    src="/demo3_bg.webp"
                    width={500}
                    height={500}
                    alt="coins"
                    loading="eager"
                  />
                </Center>
                <Stack
                  mt={6}
                  w={{ base: "auto", lg: "600px" }}
                  p={8}
                  spacing={6}
                >
                  <Heading size="lg" letterSpacing={-1}>
                    Request access to all our products and services
                  </Heading>
                  <Text fontSize={{ base: "sm", md: "lg", "2xl": "xl" }}>
                    How can Tensfer help your business?
                  </Text>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={4}>
                      <Box>
                        <Input
                          {...register("fullName", { required: true })}
                          fontSize={{ sm: "12px", lg: "md" }}
                          placeholder="Full name"
                          height="50px"
                          borderRadius="md"
                          borderColor="gray"
                        />
                      </Box>

                      <Box>
                        <Input
                          {...register("email", {
                            ...emailValidation,
                          })}
                          fontSize={{ sm: "12px", lg: "md" }}
                          placeholder="Company email"
                          height="50px"
                          borderRadius="md"
                          borderColor="gray"
                        />
                        {errors.email && (
                          <Text color="red" mt={1}>
                            Invalid email address
                          </Text>
                        )}
                      </Box>

                      <Box>
                        <Textarea
                          {...register("reason", { required: true })}
                          fontSize={{ sm: "12px", lg: "md" }}
                          placeholder="Tell us about your business"
                          height="50px"
                          borderRadius="md"
                          borderColor="gray"
                        />
                        {errors.reason && (
                          <Text color="red" mt={1}>
                            Provide a short brief about your business
                          </Text>
                        )}
                      </Box>

                      <Box
                        as={Button}
                        isLoading={isLoading}
                        justifyContent="space-between"
                        fontSize={{ sm: "12px", lg: "md" }}
                        type="submit"
                        borderRadius="md"
                        height="50px"
                        color="white"
                        bg="#08338f"
                        _hover={{ bg: "#08338f" }}
                        rightIcon={<IoMdArrowForward />}
                      >
                        Book demo
                      </Box>
                    </Stack>
                  </form>
                </Stack>
              </Stack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
