import { Stack } from "@chakra-ui/react";
import { ContactUsForm } from "@/components/ContactUsForm";
import { Layout } from "@/components/Layout";

const ContactUs = () => {
  return (
    <Layout>
      <Stack
        w="100%"
        p={{ base: 4, lg: 0 }}
        flexDirection="column"
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
        position="relative"
        spacing={{ base: "100px", md: "120px" }}
      >
        <ContactUsForm />
      </Stack>
    </Layout>
  );
};

export default ContactUs;
