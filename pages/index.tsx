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
          I'm a Frontend Developer, Open source contributor and Technical
          writer.
        </Text>
        <Text mb={".5rem"}>
          I create interactive experiences for amazing people using modern web
          technology.
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
          I'm a full-stack mobile engineer with expertise in AWS Amplify and
          React Native, passionate about creating cutting-edge cloud-native
          applications that deliver seamless user experiences. With a deep
          understanding of both front-end and back-end development, I craft
          robust and scalable solutions that exceed modern mobile app demands.
          My drive to push the boundaries of what's possible in mobile
          development keeps me ahead of the curve and fuels my passion for
          exploring new technologies. I thrive on challenges and consistently
          deliver innovative solutions that exceed client expectations. Whether
          working independently or as part of a team, my commitment to
          delivering quality code ensures exceptional results.
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
              I write technical articles on Cloud-Native Web and Mobile
              development. With my concise and clear writing style, I empower
              developers to succeed by providing them with the knowledge and
              insights they need to build innovative and cutting-edge
              applications. Whether you are a beginner or an experienced
              developer, I can help you level up your skills and take your
              projects to the next level.
            </Text>
          </ListItem>
        </OrderedList>
      </Box>
      <Box mb={"2rem"}>
        {/* <Heading as={"h2"} mb={"0.5rem"} size={"md"}>
          Work Experience
        </Heading>

        <OrderedList>
          <ListItem>
            <Heading as={"h3"} size={"sm"}>
              CBK - Frontend Software Engineer <em>(July 2019 - Aug. 2022)</em>
            </Heading>
            <Text>
              • Assisted in developing ecommerce software solutions with
              efficient architecture and scalability.
            </Text>
            <Text>
              • Set up full stacked ecommerce web application which improved
              sales by 80% using React.js and MongoDB
            </Text>
            <Text>
              • Integrated payment gateway which improved the quality of service
              by 80% using Paystack dev. API
            </Text>
            <Text>
              • Assisted in project planning and testing of project assignments.
            </Text>
            <Text>
              • Significantly improved the frontend resilience of the web
              application which reduced app crashes in production by 80% by
              writing component and integration tests using Jest and Playwright.
            </Text>
          </ListItem>
        </OrderedList> */}
      </Box>
      <Box mb={"2rem"}>
        <Heading as={"h2"} mb={"0.5rem"} size={"md"}>
          Projects
        </Heading>

        <OrderedList>
          <ListItem>
            <Heading as={"h3"} size={"sm"}>
              <Link
                href="https://codetrix.netlify.app/
"
                textDecoration={"underline"}
              >
                CODETRIX
              </Link>
            </Heading>
            <Text>
              I built a minimal online code editor using that allows users to
              write and execute code snippets in real-time. The editor is
              lightweight, user-friendly and designed to be easily integrated
              into any web application.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as={"h3"} size={"sm"}>
              <Link
                href="https://github.com/bellodavid/Tobler/
"
                textDecoration={"underline"}
              >
                TOBLER - React Native
              </Link>
            </Heading>
            <Text>
              I developed a mobile application that provides real-time tracking
              of shipped products. The app enables users to monitor the progress
              of their shipments from start to finish, ensuring complete
              visibility and control throughout the entire process.
            </Text>
          </ListItem>
          <ListItem>
            <Heading as={"h3"} size={"sm"}>
              <Link
                href="https://cryptagon-b39ea.web.app/
"
                textDecoration={"underline"}
              >
                CRYPTAGON
              </Link>
            </Heading>
            <Text>
              Built a modern web3.0 application for sending transactions to the
              blockchain built on Ethereum network also for sending
              cryptocurrencies.
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
              I created a minimal Amazon clone using React that replicates the
              core functionality of the original site, including product
              listings, shopping cart, and checkout process. The clone is
              designed to provide a user-friendly and streamlined experience,
              while still offering all the essential features of the Amazon
              platform.
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
