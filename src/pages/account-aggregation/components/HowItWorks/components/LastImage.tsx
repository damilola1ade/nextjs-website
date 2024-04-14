import { useRef } from "react";
import { useInView } from "framer-motion";

import { Image } from "@chakra-ui/react";

const LastImage = () => {
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: false });

  return (
    <Image
      mt={{ base: -32, lg: -48, "2xl": -72 }}
      ml={{ base: 0, lg: 12, "2xl": 20 }}
      ref={imageRef}
      position="absolute"
      src='/records.png'
      w={{ base: "350px", md: "500px", "2xl": "2xl" }}
      style={{
        transform: isImageInView ? "none" : "translateY(10px)",
        opacity: isImageInView ? 1 : 0,
        filter: isImageInView ? "blur(0)" : "blur(1px)",
        transition: "all 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.2s",
      }}
      alt="payment screen"
    />
  );
};

export default LastImage;
