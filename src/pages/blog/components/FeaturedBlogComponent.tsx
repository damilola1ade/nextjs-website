import { Avatar, Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

interface Props {
  date: string;
  category: string;
  title: string;
  author_name?: string;
  avatar: string;
  to: string;
  synopsis: string;
}

const FeaturedBlogComponent: React.FC<Props> = ({
  date,
  category,
  title,
  author_name,
  avatar,
  to,
  synopsis,
}) => {
  return (
    <Box
      mt={{ base: 4, lg: 12 }}
      w="auto"
      bg="#f5f5f5"
      p={{ base: 8, lg: 16 }}
      borderRadius="2xl"
    >
      <Stack spacing={6}>
        <Flex gap={4}>
          <Text fontSize={{ base: "xs", lg: "xl" }} color="gray.500">
            {date}
          </Text>
          <Text fontSize={{ base: "xs", lg: "xl" }} color="blue">
            {category}
          </Text>
        </Flex>

        <Flex justifyContent="space-between">
          <Text
            as="h1"
            maxW={{ base: "240px", lg: "720px" }}
            fontSize={{ base: "xl", lg: "6xl" }}
            fontWeight="bold"
            letterSpacing={{ base: -1, lg: -2 }}
          >
            {title}
          </Text>
          <Avatar
            name={author_name}
            src={avatar}
            size={{ base: "sm", lg: "lg" }}
            bg="#f5f5f5"
          />
        </Flex>

        <Text fontSize={{ base: "xs", lg: "2xl" }} maxW="1080px">
          {synopsis?.length > 100 ? `${synopsis?.slice(0, 200)}...` : synopsis}
        </Text>

        <Flex alignItems="left">
          <Button
            as={Link}
            href={to}
            p={0}
            rightIcon={<IoArrowForward />}
            textColor="blue"
            variant="none"
            fontSize={{ base: "xs", lg: "xl" }}
          >
            Read the story
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default FeaturedBlogComponent
