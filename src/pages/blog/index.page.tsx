import { useState, useEffect } from "react";

import { Stack } from "@chakra-ui/react";

import useSWR from "swr";

import { AllBlogs, FeaturedBlog } from "./components";
import { Layout } from "@/components/Layout";

import { fetcher } from "@/lib/api";

const Blog = ({
  featuredBlog,
  allBlogs,
  categories,
}: {
  featuredBlog: any;
  allBlogs: any;
  categories: any;
}) => {
  const [pageIndex, setPageIndex] = useState(1);

  const { data: featuredBlogData } = useSWR(
    `${process.env.BLOG_URL}/blogs?populate=deep`,
    fetcher,
    {
      fallbackData: featuredBlog,
    }
  );

  const { data: allBlogsData } = useSWR(
    `${process.env.BLOG_URL}/blogs?populate=deep&pagination[page]=${pageIndex}&pagination[pageSize]=1&sort=createdAt:desc`,
    fetcher,
    {
      fallbackData: allBlogs,
    }
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageIndex]);

  return (
    <Layout>
      <Stack
        w="100%"
        p={{ base: 4, lg: 0 }}
        mb={32}
        flexDirection="column"
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <FeaturedBlog data={featuredBlogData} />
        <AllBlogs
          blogs={allBlogsData}
          categories={categories}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
        />
      </Stack>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const pageIndex = 1;

  const featuredBlogPromise = fetcher(
    `${process.env.BLOG_URL}/blogs?populate=deep`
  );

  const allBlogsPromise = fetcher(
    `${process.env.BLOG_URL}/blogs?populate=deep&pagination[page]=${pageIndex}&pagination[pageSize]=1&sort=createdAt:desc`
  );

  const categoriesPromise = fetcher(`${process.env.BLOG_URL}/categories`);

  const [featuredBlog, allBlogs, categories] = await Promise.all([
    featuredBlogPromise,
    allBlogsPromise,
    categoriesPromise,
  ]);

  return {
    props: {
      featuredBlog,
      allBlogs,
      categories,
    },
  };
}
