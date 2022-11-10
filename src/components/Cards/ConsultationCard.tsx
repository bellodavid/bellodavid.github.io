import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

function ConsultationCard(props: Props) {
  const {} = props;

  return (
    <Flex
      backgroundImage={"url(/patterns/flower-pattern.png)"}
      backgroundSize={"cover"}
      width={"100%"}
      height={"300px"}
      padding={"4rem"}
      columnGap={"4rem"}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box>
        <Text mb={"1rem"}>
          From <span color={"brand"}>Consultations</span> to booking{" "}
          <span color={"brand"}>Corporate Training Sessions</span>, we have got
          you covered 100%.
        </Text>

        <Text>
          Book a consultation with us by clicking the button and we’ll schedule
          a call with you immediately.
        </Text>
      </Box>

      <Button
        rounded={"full"}
        padding={"2rem"}
        textTransform="uppercase"
        variant="outline"
      >
        BOOK CONSULTATION
      </Button>
    </Flex>
  );
}

export default ConsultationCard;
