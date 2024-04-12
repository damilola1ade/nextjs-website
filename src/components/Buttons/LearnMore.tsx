import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

interface ButtonProps {
  to: string;
}

export const LearnMore: React.FC<ButtonProps> = ({ to}) => {
  return (
    <Button
      as={Link}
      href={to}
      p={0}
      mt={8}
      variant="none"
      rightIcon={<IoIosArrowRoundForward />}
      fontSize={{ sm: "sm", md: "md", "2xl": "xl" }}
      _hover={{
        transform: "translateX(6px)",
        color: "#002c8a",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      Learn more
    </Button>
  );
};
