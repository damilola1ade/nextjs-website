import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Spacer,
  Link,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

export const FAQ = () => {
  return (
    <Flex mt={12} w="100%" justifyContent="center" alignItems="center">
      <Stack
        mt={12}
        mb={24}
        p={{ base: 4, lg: 0 }}
        w="100%"
        maxW={{ base: "1024px", "2xl": "1320px" }}
        mx="auto"
        justifyContent="space-between"
        spacing={6}
      >
        <Heading
          size={{ sm: "lg", md: "2xl" }}
          fontWeight="medium"
          letterSpacing={-1}
        >
          Frequently Asked Questions
        </Heading>
        <Spacer />

        <Box
          display={{ base: "none", lg: "block" }}
          position="absolute"
          right={{ base: 4, "2xl": 44 }}
          mt={24}
        >
          <Image
            src='/faq.svg'
            w={{ base: "250px", "2xl": "md" }}
            alt="faq image"
            loading="lazy"
          />
        </Box>

        <Accordion maxW="800px" allowToggle>
          <AccordionItem mb={4} borderRadius="lg" transition="ease-in 0.5s">
            <AccordionButton p={5} borderRadius="lg" _hover={{ bg: "none" }}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="semibold"
                fontSize={{ base: "md", lg: "xl", "2xl": "3xl" }}
                letterSpacing={-0.7}
              >
                What is Tensfer?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel
              maxW="960px"
              fontSize={{ base: "sm", lg: "lg", "2xl": "2xl" }}
            >
              Tensfer creates an easy-to-integrate flow that delivers access to
              hundreds of embedded integrations for businesses that seek secure
              and fast crypto transfers for themselves and their customers
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb={4} borderRadius="lg" transition="ease-in 0.5s">
            <AccordionButton p={5} borderRadius="lg" _hover={{ bg: "none" }}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="semibold"
                fontSize={{ base: "md", lg: "xl", "2xl": "3xl" }}
                letterSpacing={-0.7}
              >
                How does Tensfer work?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel
              maxW="960px"
              fontSize={{ base: "sm", lg: "lg", "2xl": "2xl" }}
            >
              Once you implement Tensfer, your users will be able to connect
              their self-custody wallet or exchange accounts to your app in just
              seconds. After which, they can make deposits and withdrawals
              without leaving your app or give you access to pull their data,
              such as transactions, balance. To create this connection, your
              users need to share their credentials with Tensfer. <br /> <br />{" "}
              We encrypt these credentials as we receive them and only use them
              to access the account in read-only mode.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb={4} borderRadius="lg" transition="ease-in 0.5s">
            <AccordionButton p={5} borderRadius="lg" _hover={{ bg: "none" }}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="semibold"
                fontSize={{ base: "md", lg: "xl", "2xl": "3xl" }}
                letterSpacing={-0.7}
              >
                Is there a volume discount?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel
              maxW="960px"
              fontSize={{ base: "sm", lg: "lg", "2xl": "2xl" }}
            >
              <Text>
                Please contact{" "}
                <Text
                  as={Link}
                  href="mailto:sales@tensfer.co"
                  textDecoration="underline"
                  _hover={{ color: "blue" }}
                >
                  {" "}
                  sales@tensfer.co
                </Text>{" "}
                for more information on our volume plan.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem mb={4} borderRadius="lg" transition="ease-in 0.5s">
            <AccordionButton p={5} borderRadius="lg" _hover={{ bg: "none" }}>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="semibold"
                fontSize={{ base: "md", lg: "xl", "2xl": "3xl" }}
                letterSpacing={-0.7}
              >
                Can I do a free trial for testing?
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel
              maxW="960px"
              fontSize={{ base: "sm", lg: "lg", "2xl": "2xl" }}
            >
              Yes! Every business is given 50 free production calls in addition
              to 50 sandbox calls to test Tensfer various products, success
              rates and data.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </Flex>
  );
};
