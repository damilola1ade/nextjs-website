import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import { FormData } from "./components/FormData";

export const Form = () => {
  return (
    <Box maxW={{ base: "1024px", "2xl": "1320px" }}>
      <Stack direction={{ base: "column", lg: "row" }} spacing={2} mb={32}>
        <Box>
          <Stack flexDirection="column" spacing={8}>
            <Box>
              <Heading
                w={{ base: "98%", md: "90%" }}
                size={{ sm: "lg", md: "2xl" }}
                fontWeight="medium"
                letterSpacing={-1}
              >
                Questions about how Tensfer can fit into your business?
              </Heading>
            </Box>
            <Box w={{ sm: "100%", md: "500px" }}>
              <Text fontSize={{ sm: "md", md: "lg", xl: "2xl" }}>
                Fill out the form and we’ll get in touch with you shortly.
              </Text>
            </Box>
          </Stack>
        </Box>
        <Box>
          <FormData />
        </Box>
      </Stack>
    </Box>
  );
};
