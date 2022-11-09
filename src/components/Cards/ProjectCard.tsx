import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

interface Props {
  title?: string;
  features?: string[];
  decision_process?: string;
  image_url?: string;
}

function ProjectCard(props: Props) {
  const { title, features, decision_process, image_url } = props;

  return <Box></Box>;
}

export default ProjectCard;
