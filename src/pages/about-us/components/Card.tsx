/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Text } from "@chakra-ui/react";

import { GetStarted } from "@/components/Buttons";

const Card = () => {
  return (
    <Box
      w="100%"
      maxW={{ base: "1024px", "2xl": "1320px" }}
      bgGradient='linear(to-r, #052466, #1c3d78, #052466)'
      color='white'
      p={{ base: 4, lg: 12 }}
      borderRadius="2xl"
      mb={32}
    >
      <Flex gap={8} flexDir="column">
        <Box maxW="560px">
          <Text
            fontSize={{ sm: "lg", md: "lg", lg: "3xl" }}
            fontWeight="semibold"
            letterSpacing={-1}
          >
            Let's build the future of embedded finance together
          </Text>
        </Box>
        <Box>
          <Text
            fontSize={{ sm: "sm", md: "lg", "2xl": "xl" }}
            maxW="600px"
            letterSpacing={-0.3}
          >
            We live by our mission, and we are building a platform we believe
            in-as well as a diverse team who want to have an impact, grow their
            careers, and support each other in the process.
          </Text>
        </Box>

        <GetStarted
          bg="#0f337f"
          w={{ base: "50%", md: "30%" }}
          text="Find a role for you"
          textColor="white"
          _hover={{bg: '#0f337f'}}
        />
      </Flex>
    </Box>
  );
};

export default Card
