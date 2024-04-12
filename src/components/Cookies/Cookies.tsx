import { Box, Stack } from "@chakra-ui/react";

import CookieConsent from "react-cookie-consent";

export const Cookies = () => {
  return (
    <CookieConsent
      debug={false}
      expires={365}
      enableDeclineButton
      buttonText={"Accept cookies"}
      declineButtonText={"Reject cookies"}
      flipButtons={true}
      style={{ background: "#1c3b7c" }}
      buttonStyle={{
        background: "white",
        borderRadius: "5px",
        fontSize: "15px",
      }}
      declineButtonStyle={{
        background: "white",
        borderRadius: "5px",
        fontSize: "15px",
        color: "black",
      }}
      buttonClasses="cookie-accept"
      declineButtonClasses="cookie-decline"
    >
      <Stack spacing={4} p={4}>
        <Box fontSize={{ base: "sm", lg: "lg", "2xl": "xl" }} fontWeight="bold">
          But first, cookies 🍪
        </Box>
        <Box fontSize={{ base: "xs", lg: "sm", "2xl": "lg" }}>
          We use cookies and similar technologies to help personalize content
          and provide a better experience. By clicking accept, you agree to
          this, as outline in our{" "}
          <a className="cookies" href="/cookies">
            Cookie Policy.
          </a>
        </Box>
      </Stack>
    </CookieConsent>
  );
};
