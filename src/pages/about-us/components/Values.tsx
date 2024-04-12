import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";

const Values = () => {
  return (
    <Box maxW={{ base: "1024px", "2xl": "1320px" }} mt={{ base: -12, lg: -36 }}>
      <Heading
        size={{ sm: "lg", md: "2xl" }}
        fontWeight="medium"
        letterSpacing={-1}
      >
        Our core values - What makes us special
      </Heading>

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={16}
        mt={{ base: 12, lg: 24 }}
      >
        <Stack direction="row">
          <Box>
            <Image
              src='/diversity.webp'
              w={{ base: "120px", lg: "xs" }}
              alt="featured-images"
              loading="lazy"
            />
          </Box>

          <Box>
            <Text
              fontSize={{ base: "lg", lg: "3xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              Diversity
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              At Tensfer, everyone is welcome. We are an inclusive and highly
              diverse team, and we welcome people from multiple backgrounds and
              accept all their individual differences with joy.
            </Text>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box>
            <Image
              src='/creativity.webp'
              w={{ base: "144px", lg: "xs" }}
              alt="featured-images"
              loading="lazy"
            />
          </Box>

          <Box>
            <Text
              fontSize={{ sm: "lg", md: "3xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              Creativity
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              At Tensfer we pride ourselves on being able to come up with
              innovative and creative solutions to our customers’ payment needs,
              therefore we foster a working environment where creativity is
              celebrated. All ideas are welcome here.
            </Text>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box>
            <Image
              src='/customer_focused.webp'
              w={{ base: "200px", lg: "md" }}
              alt="featured-images"
              loading="lazy"
            />
          </Box>

          <Box>
            <Text
              fontSize={{ base: "lg", lg: "3xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              Customer focused
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              Our customers are at the core of our operations. All our
              activities as a business are geared towards making the lives of
              our customers easier. From marketing, support, sales, and other
              services, we continuously work together to enhance client
              satisfaction
            </Text>
          </Box>
        </Stack>

        <Stack direction="row">
          <Box>
            <Image
              src='/empathy.webp'
              w={{ base: "144px", lg: "xs" }}
              alt="featured-images"
              loading="lazy"
            />
          </Box>

          <Box>
            <Text
              fontSize={{ base: "lg", lg: "3xl" }}
              fontWeight="semibold"
              letterSpacing={-1}
            >
              Empathy
            </Text>
            <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
              Empathy is very important to us at Tensfer. Building a solid
              infrastructure framework that will service multiple businesses
              would require that we work with the feelings and experiences of
              everyone. It is a core value we do not take lightly.
            </Text>
          </Box>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default Values
