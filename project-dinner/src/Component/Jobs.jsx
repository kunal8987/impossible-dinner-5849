import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Container,Button,Stack, Box } from "@chakra-ui/react";
import{ArrowBackIcon,ArrowForwardIcon}from "@chakra-ui/icons"
import Sidebar from "./Sidebar";
import JobsCard from "./JobsCard";
import Footer from "./Footer";
import Navbar from "./Navbar";
import JobFilter from "./JobFilter";
const getJobs = ({ page }) => {
  return axios.get(` http://localhost:3000/Jobs?_page=${page}&_limit=20`);
};
export default function Jobs() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getJobs({ page })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [page]);
  console.log(data);

  const handelPrevious=()=>{
    setPage(page-1)
    // console.log(1);
  }
  const handelNext=()=>{
    setPage(page+1)
    // console.log(2);
  }
  return (
    <>
     <Navbar/>
     <br />
        <JobFilter/>
      <Container maxW={"80%"} >
        {data.map((item) => (
          <JobsCard key={item.id} {...item} />
        ))}
        <Stack direction="row" spacing={4} justifyContent={'center'} m={'10'}>
          <Button onClick={ handelPrevious} disabled={page === 1}
            leftIcon={<ArrowBackIcon />}
            colorScheme="teal"
            variant="outline"
          >
            Previous
          </Button>
          <Button disabled
            colorScheme="teal"
            variant="outline"
          >
            {page}
          </Button>
          <Button onClick={handelNext} disabled={page === 7}
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="outline"
          >
            Next
          </Button>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
