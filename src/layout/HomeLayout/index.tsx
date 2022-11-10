import {
  Box,
  Text,
  Heading,
  Container,
  ListItem,
  OrderedList,
  Link,
  Flex,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { BsMoon, BsSun, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import siteMetadata from "../../../data/siteMetadata";

interface Props {
  children: ReactNode;
}

export default function HomeLayout(props: Props) {
  const { pathname } = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  const { children } = props;

  return (
    <Container mt={"2rem"} maxW={"container.lg"}>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="follow, index" />
        <meta name="description" content={siteMetadata.description} />
        <meta property="og:url" content={siteMetadata.siteUrl} />
        <meta property="og:type" content={"website"} />
        <meta property="og:site_name" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:title" content={siteMetadata.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteMetadata.twitter} />
        <meta name="twitter:title" content={siteMetadata.title} />
        <meta name="twitter:description" content={siteMetadata.description} />
        <meta name="twitter:image" content={siteMetadata.socialBanner} />
      </Head>

      <Flex mb={"2rem"} justifyContent={"space-between"} as={"nav"}>
        <NextLink href={"/"} passHref>
          <Link textDecor={pathname === "/" ? "underline" : ""}>Home</Link>
        </NextLink>

        <Flex alignItems={"center"} mb={"2rem"} columnGap={"1rem"}>
          {/* <NextLink href={"/technical-writing-portfolio"} passHref>
            <Link
              textDecor={
                pathname === "/technical-writing-portfolio" ? "underline" : ""
              }
            >
              Technical Writing Portfolio
            </Link>
          </NextLink> */}

          <IconButton
            icon={colorMode === "light" ? <BsMoon /> : <BsSun />}
            aria-label="night mode switch"
            onClick={toggleColorMode}
          >
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </IconButton>
           <NextLink href={"https://github.com/bellodavid"} passHref>
            <Link
              
            >
             <IconButton
            icon={<BsGithub />}
            aria-label="night mode switch"
          >
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </IconButton>
            </Link>
          </NextLink>
          <NextLink href={"https://www.linkedin.com/in/davidbello5/"} passHref>
            <Link
             
            >
             <IconButton
            icon={<BsLinkedin />}
            aria-label="night mode switch"
          >
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </IconButton>
            </Link>
          </NextLink>
          <NextLink href={"https://twitter.com/davidbello_"} passHref>
            <Link
             
            >
             <IconButton
            icon={<BsTwitter />}
            aria-label="night mode switch"
          >
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </IconButton>
            </Link>
          </NextLink>
    
        </Flex>
      </Flex>

      {children}
    </Container>
  );
}
