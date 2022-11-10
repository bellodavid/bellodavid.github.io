import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

function ServicePageCard(props: Props) {
  const {} = props;

  return (
    <Flex
      width={"600px"}
      height={"400px"}
      padding={"2rem"}
      rounded={"xl"}
      background={
        "linear-gradient(118.65deg, #E1E4EA -5.34%, rgba(225, 228, 234, 0) 92.06%)"
      }
      backdropFilter={"blur(10px)"}
      borderRadius={"20px"}
      color={"black"}
      flexDirection={"column"}
      justify={"center"}
      textAlign={"center"}
    >
      <Heading>Our Services</Heading>
      <Text>
        We offer a wide range of services, from product development to corporate
        trainings.
      </Text>
    </Flex>
  );
}

export default ServicePageCard;
