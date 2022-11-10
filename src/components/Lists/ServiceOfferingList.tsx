import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsCheck } from "react-icons/bs";

interface Props {
  title: string;
  listItems: string[];
  reverseImagePosition: boolean;
  children: React.ReactNode;
}

function ServiceOfferingList(props: Props) {
  const { title, children, listItems, reverseImagePosition } = props;

  return (
    <Flex
      columnGap={"3rem"}
      flexDirection={reverseImagePosition ? "row-reverse" : "row"}
    >
      <Box>
        <Heading mb={"2rem"} textTransform={"uppercase"} size={"lg"}>
          {title}
        </Heading>

        {children}

        <List spacing={3}>
          {listItems.map((name) => (
            <ListItem key={name}>
              <ListIcon as={BsCheck} color="green.500" />
              {name}
            </ListItem>
          ))}
        </List>
      </Box>

      <Image
        width={"600px"}
        src={"/images/male-architect.png"}
        alt={"male architect"}
        rounded={"3xl"}
      />
    </Flex>
  );
}

export default ServiceOfferingList;
