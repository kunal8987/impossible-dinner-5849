import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import {
  Heading,
  Input,
  Stack,
  IconButton,
  Container,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export default function Home() {
  return (
    <>
      <Container maxW={"80%"}>
        <div>
          <Navbar />

          <Heading textAlign={"center"} margin={10} as="h2" size="2xl">
            Find your dream job now
          </Heading>
          <Heading textAlign={"center"} margin={10} as="h4" size="md">
            5 lakh+ jobs for you to explore
          </Heading>
          <br />
          {/* first crousale */}
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
            position={"inherit"}
          >
            <h1 class="display-2">Top Companies Hiring Now</h1>
            <br />
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://mma.prnewswire.com/media/1477373/TCS_Logo.jpg?p=facebook"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://analyticsinsight.net/wp-content/uploads/2022/04/Tech-Mahindra-Launches-TechM-amplifAI0%E2%88%9E-to-Democratize-Artificial-Intelligence-AI-Technology-for-Enterprises-Globally.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.moneycontrol.com/static-mcnews/2018/07/Infosys.jpg?impolicy=website&width=1600&height=900"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://assets.turbologo.com/blog/en/2019/12/19084805/uber-logo-cover-958x575.png"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* secound crousale  */}
          <br />
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
            position={"inherit"}
          >
            <h1 class="display-2">Featured Companies Actively Hiring</h1>
            <br />
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img position={"inherit"}
                  src="https://www.equitybulls.com/equitybullsadmin/uploads/WIPRO%20Limited%202.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img position={"inherit"}
                  src="https://www.xicom.biz/images/socials/xicom-technologies.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img 
                  src="https://images.ctfassets.net/8j5aqoy0ts8s/4jySPaEh2mr01RvfkuQoKf/4fe9e1602b683afb023d7a475f19bda1/logo-guideline-2_2x_170912_043411.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img 
                  src="https://cdn.contactcenterworld.com/images/company/dhl-india-1200px-logo.jpg"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <br />
          <Footer />
        </div>
      </Container>
    </>
  );
}
