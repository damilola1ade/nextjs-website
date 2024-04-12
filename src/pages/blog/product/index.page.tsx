import { useState } from "react";

import useSWR from "swr";

import { Box, Flex, Button, Stack, Text } from "@chakra-ui/react";

import Link from "next/link";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";

import { Layout } from "@/components/Layout";
import { HeroBox } from "@/components/HeroBox";
import { BlogComponent } from "../components";

import moment from "moment";
import { fetcher } from "@/lib/api";

const ProductCategory = ({ blogsData }: {blogsData: any}) => {
  const [pageIndex, setPageIndex] = useState(1);

  const { data } = useSWR(
    `${process.env.BLOG_URL}/blogs?populate=deep&sort=createdAt:desc&pagination[page]=${pageIndex}&pagination[pageSize]=10&filters[category][category][$containsi]=product`,
    fetcher,
    {
      fallbackData: blogsData,
    }
  );

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
          <Stack spacing={4} ml={{ lg: 16, "2xl": 36 }} alignItems="flex-start">
            <Button
              as={Link}
              href="/blog"
              variant="link"
              leftIcon={<BiArrowBack />}
              fontWeight="bold"
              _hover={{ textColor: "blue" }}
              fontSize={{ base: "sm", lg: "xl" }}
            >
              Tensfer Blog
            </Button>
            <Text
              as="h1"
              fontSize={{ base: "lg", lg: "4xl" }}
              fontWeight="bold"
              letterSpacing={-1.5}
            >
              Product
            </Text>

            {data?.data?.length === 0 && (
              <Text as="h2" mt={12} fontSize={{ base: "md", lg: "2xl" }}>
                No blog yet
              </Text>
            )}
          </Stack>

          <Stack mt={8}>
            <Stack spacing={{ base: 20, lg: 32 }}>
              {data?.data?.map(
                (item: {
                  attributes: {
                    title: string;
                    slug: string;
                    author: {
                      data: {
                        attributes: {
                          name: string;
                          avatar: { data: { attributes: { url: string } } };
                        };
                      };
                    };
                    category: { data: { attributes: { category: string } } };
                    createdAt: moment.MomentInput;
                    content: { children: { text: string }[] }[];
                    featuredImage: {
                      data: { attributes: { name: string; url: string } };
                    };
                  };
                  id: any;
                }) => {
                  return (
                    <BlogComponent
                      key={item?.attributes?.title}
                      title={item?.attributes?.title}
                      author_name={
                        item?.attributes?.author?.data?.attributes?.name
                      }
                      category={
                        item?.attributes?.category?.data?.attributes?.category
                      }
                      date={moment(item?.attributes?.createdAt).format("ll")}
                      avatar={
                        item?.attributes?.author?.data?.attributes?.avatar?.data
                          ?.attributes?.url
                      }
                      synopsis={item?.attributes?.content[0]?.children[0]?.text}
                      to={`/blog/${item?.attributes?.slug}`}
                      image={
                        item?.attributes?.featuredImage?.data?.attributes?.url
                      }
                      alt={
                        item?.attributes?.featuredImage?.data?.attributes?.name
                      }
                    />
                  );
                }
              )}
            </Stack>

            <Flex gap={4} justifyContent="flex-end" mt={24}>
              <Button
                isDisabled={pageIndex === 1}
                onClick={() => setPageIndex(pageIndex - 1)}
                borderRadius="full"
                width="50px"
                height="50px"
                bg="blue.500"
                color="white"
                _hover={{ bg: "blue.600" }}
                _active={{ bg: "blue.700" }}
                _focus={{ boxShadow: "outline" }}
              >
                <BsArrowLeft />
              </Button>
              <Button
                isDisabled={
                  pageIndex === (data && data?.meta?.pagination?.pageCount) ||
                  (data && data?.meta?.pagination?.pageCount === 0)
                }
                onClick={() => setPageIndex(pageIndex + 1)}
                borderRadius="full"
                width="50px"
                height="50px"
                bg="blue.500"
                color="white"
                _hover={{ bg: "blue.600" }}
                _active={{ bg: "blue.700" }}
                _focus={{ boxShadow: "outline" }}
              >
                <BsArrowRight />
              </Button>
            </Flex>
          </Stack>
        </HeroBox>
      </Box>
    </Layout>
  );
};

export default ProductCategory;

export async function getStaticProps() {
  const pageIndex = 1;

  const blogsData = await fetcher(
    `${process.env.BLOG_URL}/blogs?populate=deep&sort=createdAt:desc&pagination[page]=${pageIndex}&pagination[pageSize]=10&filters[category][category][$containsi]=product`
  );

  return {
    props: {
      blogsData,
    },
  };
}
