import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Button, Stack } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CompanyCard from "./CompanyCard";

const getCompany = ({ page }) => {
  return axios.get(` http://localhost:3000/Company?_page=${page}&_limit=20`);
};
export default function Company() {
  const [datao, setDatao] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getCompany({ page })
      .then((res) => setDatao(res.data))
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
  return (
    <>
      <Navbar />
      <Container maxW={"60%"}>
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
