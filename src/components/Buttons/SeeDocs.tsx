import { Button } from "@chakra-ui/react";

import Link from "next/link";

export const SeeDocs = () => (
  <Button
    as={Link}
    href="https://docs.tensfer.co"
    target="blank"
    p={{ base: 5, md: 8 }}
    borderRadius={{ base: "lg", md: "xl" }}
    bg="#002c8a"
    textColor="white"
    _hover={{ bg: "#009be1" }}
    fontSize={{ base: "sm", md: "lg", xl: "lg" }}
  >
    See Docs
  </Button>
);
