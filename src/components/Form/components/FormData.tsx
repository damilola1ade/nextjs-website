import { Box, Button, Flex, Input, Text, Stack } from "@chakra-ui/react";
import { IoMdArrowForward } from "react-icons/io";

export const FormData = () => {
  return (
    <Box maxW="860px">
      <Stack spacing={6}>
        <Flex justifyContent="space-between">
          <Box width="48%">
            <Input
              fontSize={{ sm: "12px", lg: "lg" }}
              placeholder="First name"
              name="firstName"
              height="60px"
              borderColor="gray"
            />
          </Box>

          <Box width="48%">
            <Input
              fontSize={{ sm: "12px", lg: "lg" }}
              placeholder="Last name"
              name="lastName"
              height="60px"
              borderColor="gray"
            />
          </Box>
        </Flex>

        <Box>
          <Input
            fontSize={{ sm: "12px", lg: "lg" }}
            placeholder="Company email"
            name="email"
            height="60px"
            borderColor="gray"
          />
        </Box>

        <Box>
          <Input
            fontSize={{ sm: "12px", lg: "lg" }}
            placeholder="Company name"
            name="companyName"
            height="60px"
            borderColor="gray"
          />
        </Box>

        <Box>
          <Input
            fontSize={{ sm: "12px", lg: "lg" }}
            placeholder="Phone number (optional)"
            name="phone"
            height="60px"
            borderColor="gray"
          />
        </Box>

        <Box>
          <Input
            fontSize={{ sm: "12px", lg: "lg" }}
            placeholder="Country"
            name="country"
            height="60px"
            borderColor="gray"
          />
        </Box>

        <Box
          as={Button}
          justifyContent="space-between"
          fontSize={{ sm: "12px", lg: "lg" }}
          type="submit"
          height="60px"
          color="white"
          bg="#333333"
          borderRadius='md'
          _hover={{ bg: "#333333" }}
          rightIcon={<IoMdArrowForward />}
        >
          Contact sales
        </Box>
      </Stack>
      <Stack mt={8} color="333333">
        {/* <Text>
          By submitting this form, I confirm that i have read and understood
          Tensfer’s
          <Text
            as={Link}
            to="/"
            textDecoration="underline"
            _hover={{ color: "blue" }}
          >
            {" "}
            privacy statement.
          </Text>
        </Text> */}
        <Text>
          This form goes to our sales team. If you have questions about
          Tensfer can be helpful to your business. 
        </Text>
      </Stack>
    </Box>
  );
};
