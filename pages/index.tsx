import {
  Box,
  Text,
  Heading,
  ListItem,
  OrderedList,
  Link,
} from "@chakra-ui/react";
import HomeLayout from "../src/layout/HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <Box mb={"2rem"}>
        <Heading as={"h1"} mb={"1rem"} size={"lg"}>
          Hello, I'm David Bello 👋🏾
        </Heading>

        <Text mb={".5rem"}>
          I'm a Frontend Developer, Open source contributor and Technical writer. 
        </Text>
        <Text mb={".5rem"}>
        I create interactive experiences for amazing people using modern web technology.
        </Text>
      </Box>
      <Box mb={"2rem"}>
        <Heading as={"h2"} mb={"0.5rem"} size={"md"}>
          More about me
        </Heading>

        <Text>
          {/* <Link
            href="https://studentambassadors.microsoft.com"
            display={"inline-block"}
            fontWeight={"bold"}
            textDecoration={"underline"}
          >
            Microsoft Learn Student Ambassador
          </Link> */}

          I'm a Web and Blockchain Developer, Community Manager, and Content Creator with love for problem-solving, continually seeking and testing new tools and opportunities for innovation. I'm passionate about web applications, blockchain technologies and development tools. Some technologies I enjoy working with include ReactJS, Jamstack (JavaScript, APIs + Markup), PHP, NodeJs and Solidty. I also build Dapps on blockchain platforms such as Ethereum, Binance Smart Chain, Polygon. 🎯

        </Text>
      </Box>
      <Box mb={"2rem"}>
        <Heading as={"h2"} mb={"0.5rem"} size={"md"}>
          Core Skills
        </Heading>

        <OrderedList>
          <ListItem>
            <Heading as={"h3"} size={"sm"}>
              Problem Solving
            </Heading>
            <Text>
              I apply the principles of iteration to solve problems with
              software technologies.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as={"h3"} size={"sm"}>
              Technical Writing
            </Heading>
            <Text>
              I improve developer success by writing concise technical content
              on web and mobile development with React.
            </Text>
          </ListItem>
        </OrderedList>
      </Box>
      <Box mb={"2rem"}>
        <Heading as={"h2"} mb={"0.5rem"} size={"md"}>
          Work Experience
        </Heading>

        <OrderedList>
          <ListItem>
            <Heading as={"h3"} size={"sm"}>
              CBK - Frontend Software Engineer{" "}
              <em>(July 2019 - Aug. 2022)</em>
            </Heading>
            <Text>
            • Assisted in developing ecommerce software solutions with efficient architecture and scalability.
            </Text>
            <Text>
            •  Set up full stacked ecommerce web application which improved sales by 80% using React.js and
MongoDB
            </Text>
            <Text>
            •  Integrated payment gateway which improved the quality of service by 80% using Paystack dev. API
            </Text>
            <Text>
            •  Assisted in project planning and testing of project assignments.
            </Text>
            <Text>
            •  Significantly improved the frontend resilience of the web application which reduced app crashes in
production by 80% by writing component and integration tests using Jest and Playwright.
            </Text>
          </ListItem>
        </OrderedList>
      </Box>
      <Box mb={"2rem"}>
        <Heading as={"h2"} mb={"0.5rem"} size={"md"}>
          Projects
        </Heading>

        <OrderedList>
          <ListItem>
            <Heading as={"h3"} size={"sm"}>
              <Link
                href="https://cryptagon-b39ea.web.app/
"
                textDecoration={"underline"}
              >
                KRYPTAGON
              </Link>
            </Heading>
            <Text>
            Built a modern web3.0 application for sending transactions to the blockchain built on Ethereum network also 
            for sending cryptocurrencies.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as={"h3"} size={"sm"}>
              <Link
                href="https://clone-b3e5b.web.app/
"
                textDecoration={"underline"}
              >
                AMAZON-CLONE
              </Link>
            </Heading>
            <Text>
            Built an ecommerce website using Amazon.com landing page UI with basic functionalities.
            </Text>
          </ListItem>
        </OrderedList>
      </Box>
      <Box mb={"2rem"}>
        <Link
          href="/David(Resume).pdf"
          display={"inline-block"}
          fontWeight={"bold"}
          rel={"norefer"}
          target={"_blank"}
          textDecoration={"underline"}
        >
          View my Resume
          
        </Link>
      </Box>
    </HomeLayout>
  );
}
