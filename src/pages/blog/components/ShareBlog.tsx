import { Link, Stack } from "@chakra-ui/layout";

interface ShareProps {
  description: string;
}

const ShareBlog = ({ description }: ShareProps) => {
  const url = window.location.href;

  return (
    <Stack>
      <Link
        href={`https://twitter.com/intent/tweet?url=${url}&text=${encodeURI(
          description
        )}`}
        target="blank"
      >
        Share on Twitter
      </Link>

      <Link href="dami">Share on LinkedIn</Link>
    </Stack>
  );
};

export default ShareBlog
