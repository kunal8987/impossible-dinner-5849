import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Heading, Input, Stack, IconButton, Container, Box } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export default function Home() {
  return (
    <>
      <Container maxW={'80%'}>
        <div>
          <Navbar />

          <Heading textAlign={'center'} margin={10} as="h2" size="2xl">
            Find your dream job now
          </Heading>
          <Heading textAlign={'center'} margin={10} as="h4" size="md">
            5 lakh+ jobs for you to explore
          </Heading>
          <Box display={"flex"} alignItems="center" justifyContent={'center'} marginBottom={10} >
            <Input placeholder="Search Job Here" htmlSize={4} width='500px' />
            <IconButton marginLeft={5}
              colorScheme="blue"
              aria-label="Search database"
              icon={<SearchIcon />}
            />
          </Box>

          <Footer />
        </div>
      </Container>
    </>
  );
}
