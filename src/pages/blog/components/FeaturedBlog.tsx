import { Box, Text } from "@chakra-ui/react";
import moment from "moment";
import { HeroBox } from "@/components/HeroBox";
import { FeaturedBlogComponent } from ".";

interface Props {
  data: any;
}

const FeaturedBlog: React.FC<Props> = ({ data }) => {
  const blog = data?.data?.filter(
    (item: { attributes: { isFeatured: boolean } }) =>
      item.attributes.isFeatured
  );

  const featuredBlog = blog?.reduce(
    (
      prev: { attributes: { createdAt: string | number | Date } },
      current: { attributes: { createdAt: string | number | Date } }
    ) => {
      if (!prev) return current;
      const prevCreatedAt = new Date(prev.attributes.createdAt);
      const currentCreatedAt = new Date(current.attributes.createdAt);
      return prevCreatedAt > currentCreatedAt ? prev : current;
    },
    null
  );

  return (
    <Box w="100%" maxW={{ base: "1024px", "2xl": "1320px" }} mx="auto">
      <HeroBox>
        <Box>
          <Text fontSize={{ sm: "sm", md: "md", lg: "2xl" }} fontWeight="bold">
            Featured
          </Text>
        </Box>
        <FeaturedBlogComponent
          title={featuredBlog?.attributes?.title}
          category={
            featuredBlog?.attributes?.category?.data?.attributes?.category
          }
          date={moment(featuredBlog?.attributes?.createdAt).format("ll")}
          avatar={
            featuredBlog?.attributes?.author?.data?.attributes?.avatar?.data
              ?.attributes?.url ||
            process.env.VITE_UPLOAD_URL +
              featuredBlog?.attributes?.author?.data?.attributes?.avatar?.data
                ?.attributes?.url
          }
          synopsis={featuredBlog?.attributes?.content[0]?.children[0]?.text}
          to={`/blog/${featuredBlog?.attributes?.slug}`}
        />
      </HeroBox>
    </Box>
  );
};

export default FeaturedBlog
