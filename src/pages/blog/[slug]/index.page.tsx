import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

import { NextSeo } from "next-seo";

import {
  Box,
  Flex,
  Image,
  Button,
  Stack,
  Text,
  Avatar,
  UnorderedList,
  ListItem,
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

// export async function getStaticPaths() {
//   const blogsData = await fetcher(
//     `${process.env.BLOG_URL}/blogs?populate=deep`
//   );

//   const paths = blogsData.data.map((item: { attributes: { slug: string } }) => {
//     return {
//       params: { slug: item.attributes.slug },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }: any) {
//   const { slug } = params;

//   const [blogsData, author] = await Promise.all([
//     fetcher(`${process.env.BLOG_URL}/blogs/${slug}`),
//     fetcher(`${process.env.BLOG_URL}/authors?populate=deep`),
//   ]);

//   return {
//     props: {
//       data: blogsData,
//       author: author,
//     },
//   };
// }

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
  // const [activeLink, setActiveLink] = useState("");

  const tableOfContents = data?.data?.attributes?.content.filter(
    (item: { type: string }) => item.type === "heading"
  );

  function generateId(text: string) {
    return text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  }

  const content: BlocksContent = data?.data?.attributes?.content;

  const url = typeof window !== "undefined" ? window.location.href : "";

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const headings = tableOfContents.map(
  //       (heading: { children: { text: string }[] }) =>
  //         document.getElementById(generateId(heading.children[0].text))
  //     );
  //     let currentHeadingIndex = 0;

  //     for (let i = headings.length - 1; i >= 0; i--) {
  //       if (headings[i].offsetTop <= scrollPosition) {
  //         currentHeadingIndex = i;
  //         break;
  //       }
  //     }

  //     const activeHeading = tableOfContents[currentHeadingIndex];
  //     setActiveLink(generateId(activeHeading.children[0].text));
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [tableOfContents]);

  return (
    <>
      <NextSeo
        title={data?.data?.attributes?.title}
        description="Read our blogs - Tensfer"
        canonical={data?.data?.attributes?.slug}
      />
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
                    src={
                      author?.data[0]?.attributes?.avatar?.data?.attributes?.url
                    }
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
                  <Text fontSize={{ base: "sm", lg: "xl" }} fontWeight="bold">
                    On this page
                  </Text>

                  <UnorderedList spacing={3} mt={8}>
                    {tableOfContents?.map(
                      (
                        heading: { children: { text: string }[] },
                        index: string
                      ) => (
                        <ListItem
                          key={index}
                          maxW="280px"
                          fontSize={{ base: "md", "2xl": "lg" }}
                          fontWeight="medium"
                        >
                          <Link
                            href={`#${generateId(heading.children[0].text)}`}
                          >
                            {heading.children[0].text}
                          </Link>
                        </ListItem>
                      )
                    )}
                  </UnorderedList>

                  <Stack mt={28} spacing={4}>
                    <Text fontSize={{ base: "sm", lg: "xl" }} fontWeight="bold">
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

              <Stack spacing={6} maxW={{ base: "720px", "2xl": "920px" }}>
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
                    {
                      data?.data?.attributes?.category?.data?.attributes
                        ?.category
                    }
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
                      const idString = (Array.isArray(children) ? children : [])
                        .map(
                          (child: { props: { text: any } }) => child.props.text
                        )
                        .join("-");
                      const id = String(idString)
                        .toLowerCase()
                        .replace(/<\/?[^>]+(>|$)/g, "")
                        .trim()
                        .replace(/\s+/g, "-")
                        .replace(/[^\w-]+/g, "");

                      switch (level) {
                        case 1:
                          return (
                            <Text
                              id={id}
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
                              id={id}
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
                              id={id}
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
                              id={id}
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
                              id={id}
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
                              id={id}
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
                              id={id}
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
    </>
  );
};

export default SingleBlog;
