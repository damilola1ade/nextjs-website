import { Box, Flex } from "@chakra-ui/layout";
import Lottie from "lottie-react";

import loading from "../../../public/loading.json";

export const Loader = () => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Box mt={64} mb={64}>
        <Lottie animationData={loading} style={{ height: 80 }} loop={true} />
      </Box>
    </Flex>
  );
};
