import { useRef } from "react";
import { useInView } from "framer-motion";

import { Image } from "@chakra-ui/react";

const FirstImage = () => {
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: false });

  return (
    <Image
      ref={imageRef}
      position="absolute"
      src="/iphone.png"
      w={{ base: "150px", md: "250px", "2xl": "350px" }}
      style={{
        transform: isImageInView ? "none" : "translateY(10px)",
        opacity: isImageInView ? 1 : 0,
        filter: isImageInView ? "blur(0)" : "blur(1px)",
        transition: "all 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.2s",
      }}
      alt="consent screen"
    />
  );
};

export default FirstImage;
