import { Button, ResponsiveValue } from "@chakra-ui/react";
import Link from "next/link";

type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase";

interface ButtonProps {
  p?: { base: number; md: number };
  bg?: string;
  w?: string;
  bgGradient?: string;
  textColor: string;
  fontSize?: { base: string; md: string };
  textTransform?: ResponsiveValue<TextTransform>;
  variant?: string;
  text: string;
  border?: string;
  borderColor?: string;
  _hover?: {
    bg?: string;
    bgGradient?: string;
    textColor: string;
    border?: string;
    borderColor?: string;
  };
}

export const ExploreDemo: React.FC<ButtonProps> = ({
  w,
  bg,
  bgGradient,
  textColor,
  textTransform,
  variant,
  text,
  border,
  borderColor,
  p = { base: 5, md: 8 },
  fontSize = { base: "sm", md: "lg" },
  _hover,
}) => {
  return (
    <Button
      as={Link}
      href='/demo'
      bg={bg}
      w={w}
      bgGradient={bgGradient}
      textColor={textColor}
      textTransform={textTransform}
      variant={variant}
      style={{ borderColor: borderColor }}
      p={p}
      borderRadius={{ base: "lg", md: "xl" }}
      border={border}
      fontSize={fontSize}
      _hover={_hover}
    >
      {text}
    </Button>
  );
};
