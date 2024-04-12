import { Button } from "@chakra-ui/react";
import Link from "next/link";

export const Blog = () => {
  return (
    <Button
      as={Link}
      href="/blog"
      variant="none"
      fontSize={{ base: "md", "2xl": "xl" }}
      _hover={{ color: "blue" }}
    >
      Blog
    </Button>
  );
};
