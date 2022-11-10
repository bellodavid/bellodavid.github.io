import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  increment?: boolean;
  statistic: number;
  description: string;
}

function StatsCard(props: Props) {
  const { increment = true, statistic, description } = props;

  return (
    <Flex
      alignItems={"center"}
      flexDirection={"column"}
      rounded={"xl"}
      padding={"1rem"}
      width={"250px"}
      height={"200px"}
      rowGap={"1rem"}
      textAlign={"center"}
      bgColor={"gray.200"}
    >
      <Text fontWeight={"bold"} fontSize={"5xl"} color={"brand"}>
        {statistic}
        {increment && "+"}
      </Text>
      <Text fontSize={"xl"}>{description}</Text>
    </Flex>
  );
}

export default StatsCard;
