import React from "react";
import { Box, Image, Heading, Text, Flex, Grid } from "@chakra-ui/react";

interface Props {
  content: string;
  attestantName: string;
  attestantTitle: string;
  attestantAvatar: string;
}

function TestimonialCard(props: Props) {
  const { content, attestantName, attestantTitle, attestantAvatar } = props;

  return (
    <Grid
      bg="gray.200"
      maxWidth="500px"
      width="500px"
      templateRows="250px 100px"
      p="2rem"
      rounded="xl"
    >
      <Box>{content}</Box>

      <Flex alignItems="center" columnGap="1rem">
        <Image
          rounded="full"
          width="80px"
          height="80px"
          src={attestantAvatar}
          alt={attestantName}
        />
        <Box>
          <Text fontWeight="bold">{attestantName}</Text>
          <Text>{attestantTitle}</Text>
        </Box>
      </Flex>
    </Grid>
  );
}

export default TestimonialCard;
