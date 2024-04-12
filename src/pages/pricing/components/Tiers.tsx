import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Icon,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  Box,
} from "@chakra-ui/react";

import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { ScheduleADemo } from "@/components/Buttons";

const data = [
  {
    type: "STARTER",
    title: "Free",
    body: "Ideal for startups, building and testing out new products. Get your API keys and start testing.",
    pros: [
      "50 free API calls",
      "Test in sandbox environment",
      "20 test credentials",
      "API Management Dashboard"
    ],
  },
  {
    type: "GROWTH",
    title: "Pay as you go",
    body: "Ideal for SMEs building at higher growth rate. Pay as you go with no commitments.",
    pros: [
      "Everything in Free plan",
      "Unlimited test credentials",
      "Developer support",
      "Widget design customization",
      "App conversion insights",
    ],
  },
  {
    type: "SCALE",
    title: "Enterprise",
    body: "Ideal for companies building at scale and with multiple data needs. Contact us and we’ll help you get setup.",
    pros: [
      "Everything in Pay as you go",
      "Volume discount (30% - 80%)",
      "Account management",
      "Direct communications channel",
      "Pre-paid wallet",
    ],
  },
];

const Tiers = () => {
  return (
    <Box bg={{ base: "#f2f9ff", lg: "white" }} w="100%" p={12}>
      <Flex
        flexDirection="column"
        w="100%"
        maxW={{ base: "1200px", "2xl": "1320px" }}
        mx="auto"
      >
        <SimpleGrid spacing={4} columns={[1, 1, 3]}>
          {data.map((item, idx) => (
            <Card key={idx} borderRadius="2xl" p={4} border="1px" borderColor="gray.400">
              <CardHeader>
                <Text>{item.type}</Text>
                <Heading
                  mt={2}
                  size={{ sm: "md", md: "2xl" }}
                  letterSpacing={-1}
                >
                  {item.title}
                </Heading>
              </CardHeader>
              <CardBody>
                <Text
                  fontSize={{ base: "sm", md: "md", "2xl": "xl" }}
                  fontWeight="medium"
                  color="#313233"
                >
                  {item.body}
                </Text>
                <Stack mt={8}>
                  {item.pros.map((pro, idx) => (
                    <Stack key={idx} mt={4} direction="row" spacing={2}>
                      <Icon
                        mt={1}
                        as={IoCheckmarkCircleSharp}
                        color="green.500"
                      />
                      <Text fontSize={{ base: "sm", md: "md", "2xl": "xl" }}>
                        {pro}
                      </Text>
                    </Stack>
                  ))}
                </Stack>
              </CardBody>
              <CardFooter>
                <ScheduleADemo
                  w="100%"
                  bg="#08338f"
                  _hover={{ bg: "#08338f", textColor: "white" }}
                  textColor="white"
                  text="Get started"
                  fontSize={{ base: "12px", md: "md" }}
                />
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Tiers
