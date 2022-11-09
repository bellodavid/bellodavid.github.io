import HomeLayout from "../src/layout/HomeLayout";
const { Client } = require("@notionhq/client");

import {
  Box,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";

interface Props {
  pageContent: any[];
}

function TechnicalWritingPortfolio(props: Props) {
  const { pageContent } = props;

  const grouper = (content: any) => {
    const groups: {
      id: string;
      heading: string;
      listItems: { id: string; content: string; link: string }[];
    }[] = [];

    for (let item of content) {
      if (item.type === "heading_1") {
        groups.push({
          id: item.id,
          heading: item.heading_1.rich_text[0].plain_text,
          listItems: [],
        });
      } else if (
        item.type === "numbered_list_item" &&
        groups[groups.length - 1]
      ) {
        groups[groups.length - 1].listItems.push({
          id: item.id,
          content: item.numbered_list_item.rich_text[0].plain_text,
          link: item.numbered_list_item.rich_text[0].href,
        });
      }
    }

    return groups;
  };

  return (
    <HomeLayout>
      <Heading mb={"1rem"} as={"h1"} size={"lg"}>
        Technical Writing Portfolio
      </Heading>

      <Text mb={"1rem"}>
        I have written technical content for organizations like Section.io,
        Repl.it, and Educative.io. Some of these blogs were through Draft.dev, a
        technical writing organization.
      </Text>

      {grouper(pageContent).map((group) => {
        return (
          <Box mb={"1.5rem"} key={group.id}>
            <Heading mb={"0.5rem"} as={"h2"} size={"md"}>
              {group.heading}
            </Heading>

            <OrderedList>
              {group.listItems.map((item) => (
                <ListItem key={item.id}>
                  <Link
                    _hover={{ textDecoration: "underline" }}
                    href={item.link}
                    target={"_blank"}
                  >
                    {item.content}
                  </Link>
                </ListItem>
              ))}
            </OrderedList>
          </Box>
        );
      })}
      {!pageContent.length && <Text>Failed to fetch</Text>}
    </HomeLayout>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY });
  const blockId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

  const { results } = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 100,
  });

  return {
    props: {
      pageContent: results || [],
    },
  };
}

export default TechnicalWritingPortfolio;
