import { Dispatch, Key, SetStateAction } from "react";

import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import { HeroBox } from "@/components/HeroBox";
import { BlogComponent } from ".";
import moment from "moment";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  blogs: any;
  categories: any;
  pageIndex: number;
  setPageIndex: Dispatch<SetStateAction<number>>;
}

const AllBlogs: React.FC<Props> = ({ blogs, categories, pageIndex, setPageIndex }) => {

  return (
    <Box
      mt={-12}
      w="100%"
      p={{ base: 4, lg: 0 }}
      maxW={{ base: "1080px", "2xl": "1440px" }}
      mx="auto"
      position="relative"
    >
      <HeroBox>
        <Flex
          gap={{ base: 0, lg: 4 }}
          ml={{ base: 0, lg: 12, "2xl": 32 }}
          alignItems="center"
        >
          <Button
            bg="black"
            color="white"
            fontSize={{ base: "xs", lg: "xl" }}
            borderRadius="full"
            p={{ base: 0, lg: 8 }}
            w={{ base: "auto", lg: "80px" }}
          >
            All
          </Button>
          {categories?.data?.map(
            (
              category: {
                attributes: {
                  category: string;
                };
              },
              idx: Key
            ) => {
              return (
                <Button
                  as={Link}
                  href={`blog/${category.attributes.category.toLowerCase()}`}
                  key={idx}
                  variant="ghost"
                  color="black"
                  fontSize={{ base: "xs", lg: "xl" }}
                  borderRadius="full"
                  p={8}
                >
                  {category.attributes.category}
                </Button>
              );
            }
          )}
        </Flex>
        <Stack mt={{ base: 4, lg: 12 }} spacing={{ base: 20, lg: 24 }}>
          {blogs?.data.map(
            (blog: {
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
                  key={blog?.attributes?.title}
                  title={blog?.attributes?.title}
                  author_name={blog?.attributes?.author?.data?.attributes?.name}
                  category={
                    blog?.attributes?.category?.data?.attributes?.category
                  }
                  date={moment(blog?.attributes?.createdAt).format("ll")}
                  avatar={
                    blog?.attributes?.author?.data?.attributes?.avatar?.data
                      ?.attributes?.url
                  }
                  synopsis={blog?.attributes?.content[0]?.children[0]?.text}
                  to={`/blog/${blog?.attributes?.slug}`}
                  image={blog?.attributes?.featuredImage?.data?.attributes?.url}
                  alt={blog?.attributes?.featuredImage?.data?.attributes?.name}
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
              pageIndex === (blogs && blogs?.meta?.pagination?.pageCount)
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
      </HeroBox>
    </Box>
  );
};

export default AllBlogs;
