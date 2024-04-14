import {
  Avatar,
  Box,
  Button,
  Image,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoArrowForward } from "react-icons/io5";

import defaultBlogImage from "../../../../public/defaultBlogImage.png";

import Link from "next/link";

interface Props {
  date: string;
  category: string;
  title: string;
  author_name?: string;
  avatar: string;
  to: string;
  synopsis: string;
  image: string;
  alt: string;
}

const BlogComponent: React.FC<Props> = ({
  date,
  category,
  title,
  author_name,
  avatar,
  to,
  synopsis,
  image,
  alt,
}) => {
  return (
    <Box mt={{ base: 4, lg: 12 }} pos="relative" w="100%" as={Link} href={to}>
      <Flex
        justifyContent="space-around"
        flexDirection={{ base: "column", lg: "row" }}
        gap={6}
      >
        <Stack spacing={6}>
          <Flex gap={6}>
            <Text
              fontSize={{ base: "xs", lg: "md", "2xl": "lg" }}
              color="gray.500"
            >
              {date}
            </Text>
            <Text fontSize={{ base: "xs", lg: "md", "2xl": "lg" }} color="blue">
              {category}
            </Text>
          </Flex>

          <Flex justifyContent="space-between">
            <Text
              maxW={{ base: "full", lg: "480px" }}
              fontSize={{ base: "lg", lg: "5xl" }}
              fontWeight="bold"
              letterSpacing={-1}
            >
              {title}
            </Text>
          </Flex>

          <Text
            fontSize={{ base: "xs", lg: "lg", "2xl": "2xl" }}
            maxW={{ base: "420px", "2xl": "560px" }}
          >
            {synopsis?.length > 100
              ? `${synopsis?.slice(0, 200)}...`
              : synopsis}
          </Text>

          <Flex alignItems="left">
            <Button
              p={0}
              rightIcon={<IoArrowForward />}
              textColor="blue"
              variant="none"
              fontSize={{ base: "xs", lg: "md", "2xl": "lg" }}
            >
              Read the story
            </Button>
          </Flex>
        </Stack>

        <Stack>
          <Flex gap={4} alignItems="center">
            <Avatar
              name={author_name}
              src={avatar}
              size={{ base: "xs", lg: "md" }}
              bg="white"
            />
            <Text
              fontSize={{ base: "xs", lg: "sm", "2xl": "lg" }}
              fontWeight="semibold"
              letterSpacing={-0.3}
            >
              {author_name}
            </Text>
          </Flex>

          <Flex alignItems="center" justifyContent="center">
            <Box w={{ base: "200px", lg: "360px" }}>
              <Image
                src={image || `/defaultBlogImage.png`}
                borderRadius="2xl"
                alt={alt}
              />
            </Box>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default BlogComponent;
