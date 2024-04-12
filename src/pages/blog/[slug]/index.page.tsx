import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

import {
  Box,
  Flex,
  Image,
  Button,
  Stack,
  Text,
  Avatar,
} from "@chakra-ui/react";

import { BiArrowBack } from "react-icons/bi";

import { Layout } from "@/components/Layout";
import { HeroBox } from "@/components/HeroBox";

import Link from "next/link";
import { SubscribeForm } from "../components";

import {
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";
import { fetcher } from "@/lib/api";

export async function getServerSideProps({ params }: any) {
  
  const { slug } = params;

  const [blogsData, author] = await Promise.all([
    fetcher(`${process.env.BLOG_URL}/blogs/${slug}`),
    fetcher(`${process.env.BLOG_URL}/authors?populate=deep`),
  ]);

  return {
    props: {
      data: blogsData,
      author: author,
    },
  };
}

const SingleBlog = ({ data, author }: { data: any; author: any }) => {
  const content: BlocksContent = data?.data?.attributes?.content;

  const url = typeof window !== "undefined" ? window.location.href : "";

  return (
    <Layout>
      <Box
        w="100%"
        maxW={{ base: "1080px", "2xl": "1440px" }}
        mx="auto"
        position="relative"
        p={{ base: 8, lg: 0 }}
        mb={32}
      >
        <HeroBox>
          <Button
            as={Link}
            href="/blog"
            ml={{ lg: 12, "2xl": 40 }}
            variant="link"
            leftIcon={<BiArrowBack />}
            fontWeight="bold"
            _hover={{ textColor: "blue" }}
            fontSize={{ base: "sm", lg: "xl" }}
          >
            Tensfer Blog
          </Button>
          <Flex
            w="100%"
            flexDirection={{ base: "column", lg: "row" }}
            justifyContent="space-between"
            gap={{ base: 12, lg: 0 }}
            _before={{
              content: '""',
              display: "table",
              clear: "both",
            }}
            _after={{
              content: '""',
              display: "table",
              clear: "both",
            }}
          >
            <Stack>
              <Flex gap={4} mt={{ base: 0, lg: 72 }}>
                <Avatar
                  size={{ base: "sm", lg: "md" }}
                  src={author?.data[0]?.attributes?.avatar?.data?.attributes?.url}
                />
                <Stack spacing={0}>
                  <Text fontSize={{ base: "sm", lg: "md" }} fontWeight="bold">
                  {author?.data[0]?.attributes?.name}
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="gray.500">
                  {author?.data[0]?.department}
                  </Text>
                </Stack>
              </Flex>

              <Stack
                mt={12}
                position="sticky"
                top="100px"
                display={{ base: "none", lg: "block" }}
              >
                <Stack mt={32} spacing={4}>
                  <Text fontSize={{ base: "sm", lg: "lg" }} fontWeight="bold">
                    Share article
                  </Text>
                  <Flex gap={1}>
                    <TwitterShareButton
                      url={url}
                      title={data?.data?.attributes?.title}
                    >
                      <XIcon size={28} round />
                    </TwitterShareButton>

                    <LinkedinShareButton url={url}>
                      <LinkedinIcon size={28} round />
                    </LinkedinShareButton>
                  </Flex>
                </Stack>
              </Stack>
            </Stack>

            <Stack spacing={6} maxW="720px">
              <Text
                fontSize={{ base: "xl", lg: "6xl" }}
                fontWeight="bold"
                letterSpacing={{ base: -0.8, lg: -3 }}
              >
                {data?.data?.attributes?.title}
              </Text>
              <Flex gap={6}>
                <Text fontSize={{ base: "sm", lg: "xl" }} color="gray.500">
                  {data?.data?.attributes?.date}
                </Text>
                <Text fontSize={{ base: "sm", lg: "xl" }} color="blue">
                  {data?.data?.attributes?.category?.data?.attributes?.category}
                </Text>
              </Flex>
              <BlocksRenderer
                content={content}
                blocks={{
                  link: ({ children, url }) => (
                    <Link
                      style={{ color: "blue", textDecoration: "underline" }}
                      href={url}
                      target="blank"
                    >
                      {children}
                    </Link>
                  ),
                  image: ({ image }) => {
                    return (
                      <Flex alignItems="center" justifyContent="center">
                        <Image
                          src={image.url}
                          alt={image.alternativeText || ""}
                          maxW={{ base: "180px", lg: "250px" }}
                          borderRadius="lg"
                          mb="1rem"
                        />
                      </Flex>
                    );
                  },
                  paragraph: ({ children }) => (
                    <Text
                      fontSize={{ base: "sm", lg: "xl", "2xl": "2xl" }}
                      mb="1rem"
                    >
                      {children}
                    </Text>
                  ),
                  list: ({ children }) => (
                    <Text
                      fontSize={{ base: "sm", lg: "xl", "2xl": "2xl" }}
                      mb="1rem"
                    >
                      {children}
                    </Text>
                  ),
                  heading: ({ children, level }) => {
                    switch (level) {
                      case 1:
                        return (
                          <Text
                            as="h1"
                            fontSize={{ base: "2xl", lg: "5xl" }}
                            fontWeight="bold"
                          >
                            {children}
                          </Text>
                        );
                      case 2:
                        return (
                          <Text
                            as="h2"
                            fontSize={{ base: "xl", lg: "4xl" }}
                            fontWeight="bold"
                          >
                            {children}
                          </Text>
                        );
                      case 3:
                        return (
                          <Text
                            as="h3"
                            fontSize={{ base: "lg", lg: "3xl" }}
                            fontWeight="bold"
                          >
                            {children}
                          </Text>
                        );
                      case 4:
                        return (
                          <Text
                            as="h4"
                            fontSize={{ base: "lg", lg: "3xl" }}
                            fontWeight="bold"
                          >
                            {children}
                          </Text>
                        );
                      case 5:
                        return (
                          <Text
                            as="h5"
                            fontSize={{ base: "md", lg: "2xl" }}
                            fontWeight="bold"
                          >
                            {children}
                          </Text>
                        );
                      case 6:
                        return (
                          <Text
                            as="h6"
                            fontSize={{ base: "md", lg: "xl" }}
                            fontWeight="bold"
                          >
                            {children}
                          </Text>
                        );
                      default:
                        return (
                          <Text
                            as="h1"
                            fontSize={{ base: "2xl", lg: "5xl" }}
                            fontWeight="bold"
                          >
                            {children}
                          </Text>
                        );
                    }
                  },
                }}
              />
              <Box mt={12}>
                <SubscribeForm />
              </Box>
            </Stack>
          </Flex>
        </HeroBox>
      </Box>
    </Layout>
  );
};

export default SingleBlog;
