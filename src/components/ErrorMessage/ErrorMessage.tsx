import { Icon } from "@chakra-ui/icon"
import { Flex, Text } from "@chakra-ui/layout"
import { BiSolidErrorCircle } from "react-icons/bi"

export const ErrorMessage = () => {
  return (
    <Flex justifyContent="center" alignItems="center" gap={2}>
    <Icon as={BiSolidErrorCircle} color="red" fontSize="lg" />
    <Text mt={64} mb={64} fontSize="lg">
      Something seems to be wrong
    </Text>
  </Flex>
  )
}