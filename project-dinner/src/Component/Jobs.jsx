import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {
  Container,
  Button,
  Stack,
  Box,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, SearchIcon } from "@chakra-ui/icons";
import JobsCard from "./JobsCard";
import Footer from "./Footer";
import Nav2 from "./Nav2";
import JobFilter from "./JobFilter";
const getJobs = ({ page }) => {
  return axios.get(` http://localhost:3000/Jobs?_page=${page}&_limit=20`);
};
export default function Jobs() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [filterValue, setFliterValue] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    getJobs({ page })
      .then((res) => {
        setData(res.data);
        setSearchData(res.data);
      })
      .catch((err) => console.log(err));
  }, [page]);
  console.log(data);

  const handelPrevious = () => {
    setPage(page - 1);
    // console.log(1);
  };
  const handelNext = () => {
    setPage(page + 1);
    // console.log(2);
  };

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setData(searchData);
    } else {
      const filterResult = searchData.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setData(filterResult);
    }
    setFliterValue(e.target.value);
  };
  return (
    <>
      <Nav2 />
      <br />
      <JobFilter />
      <Container maxW={"80%"}>
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          marginBottom={10}
        >
          <Input
            placeholder="Search Job Here"
            value={filterValue}
            onInput={(e) => handleFilter(e)}
            htmlSize={4}
            width="500px"
          />
          <IconButton
            marginLeft={5}
            colorScheme="blue"
            aria-label="Search database"
            icon={<SearchIcon />}
          />
        </Box>
        {data.map((item) => (
          <JobsCard key={item.id} {...item} />
        ))}
        <Stack direction="row" spacing={4} justifyContent={"center"} m={"10"}>
          <Button
            onClick={handelPrevious}
            disabled={page === 1}
            leftIcon={<ArrowBackIcon />}
            colorScheme="teal"
            variant="outline"
          >
            Previous
          </Button>
          <Button disabled colorScheme="teal" variant="outline">
            {page}
          </Button>
          <Button
            onClick={handelNext}
            disabled={page === 7}
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
