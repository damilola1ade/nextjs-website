import { Box, BoxProps } from "@chakra-ui/react";

export const HeroBox = (props: BoxProps) => {
  return <Box pt={{ base: 24, lg: 40 }} {...props} />;
};
