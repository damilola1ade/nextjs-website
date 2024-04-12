import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
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
              height="70px"
              borderColor="gray"
            />
          </Box>

          <Box width="48%">
            <Input
              fontSize={{ sm: "12px", lg: "lg" }}
              placeholder="Last name"
              name="lastName"
              height="70px"
              borderColor="gray"
            />
          </Box>
        </Flex>

        <Flex justifyContent="space-between">
          <Box width="48%">
            <Input
              fontSize={{ sm: "12px", lg: "lg" }}
              placeholder="Phone number"
              name="firstName"
              height="70px"
              borderColor="gray"
            />
            <Text fontSize={{base: '8px', lg: '13px', '2xl': "15px"}} mt={1}>
              Please include country code and preferably also reachable via
              WhatsApp.
            </Text>
          </Box>

          <Box width="48%">
            <Input
              fontSize={{ sm: "12px", lg: "lg" }}
              placeholder="Email"
              name="lastName"
              height="70px"
              borderColor="gray"
            />
          </Box>
        </Flex>

        <Box>
          <Select
            fontSize={{ sm: "12px", lg: "lg" }}
            placeholder="Inquiry type"
            name="phone"
            height="70px"
            borderColor="gray"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Refunds & Complaints">Refunds & Complaints</option>
            <option value="Products & Account Related">
              Products & Account Related
            </option>
            <option value="Others">Others</option>
          </Select>
        </Box>

        <Box>
          <Text fontSize="sm">Additional information</Text>
          <Textarea
            mt={2}
            fontSize={{ sm: "12px", lg: "md" }}
            placeholder="Hi, We are building a banking application and are looking for API providers to easily onboard customers and enable them to make payments. Can you share information on this?"
            _placeholder={{ color: "gray.500" }}
            name="country"
            height="120px"
            borderColor="gray"
          />
        </Box>

        <Box
          as={Button}
          justifyContent="space-between"
          fontSize={{ sm: "12px", lg: "lg" }}
          type="submit"
          height="70px"
          color="white"
          bg="#333333"
          borderRadius="md"
          _hover={{ bg: "#333333" }}
          rightIcon={<IoMdArrowForward />}
        >
          Submit
        </Box>
      </Stack>
    </Box>
  );
};
