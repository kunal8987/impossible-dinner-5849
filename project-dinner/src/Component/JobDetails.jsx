import {
  Box,
  Container,
  Stack,
  Text,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";
import Nav2 from "./Nav2";
import Footer from "./Footer";
export default function JobDetails() {
  const [jobDetails, setJobDetails] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/Jobs/${id}`)
      .then(({ data }) => {
        setJobDetails(data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(jobDetails);

  const {
    title,
    subTitle,
    starRating,
    reviewsCount,
    job_description,
    ellipsis,
    ellipsis_3,
    fleft_2,
    fleft_3,
    fleft_4,
    fleft_5,
    fleft_6,
    fleft_7,
  } = jobDetails;
  return (
    <>
      <Nav2 />
      <br />
      <Container maxW={"70%"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {title}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                {subTitle}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  {job_description}
                </Text>
                <Text fontSize={"lg"}>
                  6+ years of recent hands-on experience in Handlebar templates,
                  JS, React, HTML and CSS. 2+ recent hands-on experience in Node
                  JS. Hands-on experience with any redux middleware library for
                  state management. Recent hands-on experience in IntelliJ OR
                  Visual Studio Code. Experience with Agile software development
                  Good understanding of web security. Basic understanding of
                  Java Continuous integration and deployment tools like Jenkins
                  and Git for version control.
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Skills
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>{fleft_2}</ListItem>
                    <ListItem>{fleft_3}</ListItem>{" "}
                    <ListItem>{fleft_4}</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>{fleft_5}</ListItem>
                    <ListItem>{fleft_6}</ListItem>
                    <ListItem>{fleft_7}</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Location : {ellipsis_3}
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Experiance:
                    </Text>{" "}
                    {ellipsis}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Star rating:
                    </Text>{" "}
                    {starRating}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Reviews count:
                    </Text>{" "}
                    {reviewsCount}
                  </ListItem>
                  <Button colorScheme="teal" variant="outline">
                    Applay Now
                  </Button>
                  <br />
                </List>
              </Box>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Footer />
    </>
  );
}
