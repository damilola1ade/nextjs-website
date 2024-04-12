import { Button } from "@chakra-ui/react";
import Link from "next/link";

export const ViewCoverage = () => {
  return (
    <Button
      as={Link}
      href="https://plastic-wealth-6df.notion.site/Tensfer-Coverage-1266a46b27a4409faab8c37aad23fba7?pvs=4"
      target="blank"
      p={{ base: 5, md: 8 }}
      borderRadius={{ base: 'lg', md: 'xl' }}
      bg="#002c8a"
      textColor="white"
      _hover={{ bg: "#002c8a" }}
      fontSize={{ base: "sm", md: "lg", xl: "lg" }}
    >
      View coverages
    </Button>
  );
};
