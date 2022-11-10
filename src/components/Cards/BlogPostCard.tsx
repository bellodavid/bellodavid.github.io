import { Box, Image, Heading, Text, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

interface Props {}

function BlogPostCard(props: Props) {
  const {} = props;

  return (
    <Box>
      <Box
        rounded={"2xl"}
        backgroundImage={"url(/images/blog-post-cover.jpg)"}
        mb={"1rem"}
        width={"400px"}
        height={"320px"}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        title={"blog post cover"}
        role={"image"}
        aria-label={"blog post cover"}
      />
      <Text mb={"0.5rem"} textTransform="uppercase">
        news
      </Text>
      <Heading size={"md"} mb={"0.5rem"}>
        3D Printing to become a billion dollar venture
      </Heading>
      <Text mb={"0.5rem"}>
        3D printers can be considered the core foundation underlying the
        additive manufacturing industry's growth in recent years.
      </Text>
      <NextLink href="/some-link" passHref>
        <Link>Read Here...</Link>
      </NextLink>
    </Box>
  );
}

export default BlogPostCard;
