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
import Footer from "./Footer";
import CompanyCard from "./CompanyCard";
import Nav2 from "./Nav2";

const getCompany = ({ page }) => {
  return axios.get(` http://localhost:3000/Company?_page=${page}&_limit=20`);
};
export default function Company() {
  const [datao, setDatao] = useState([]);
  const [page, setPage] = useState(1);
  const [filterValue, setFliterValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    getCompany({ page })
      .then((res) => {
        setDatao(res.data);
        setSearchData(res.data);
      })
      .catch((err) => console.log(err));
  }, [page]);
  console.log(datao);

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
      setDatao(searchData);
    } else {
      const filterResult = searchData.filter((item) =>
        item.titleAnchor.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setDatao(filterResult);
    }
    setFliterValue(e.target.value);
  };
  return (
    <>
      <Nav2 />
      <br />
      <Container maxW={"60%"}>
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
        {datao.map((elem) => (
          <CompanyCard key={elem.id} {...elem} />
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
            disabled={page === 12}
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
