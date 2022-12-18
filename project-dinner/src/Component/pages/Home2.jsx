import React from "react";
import Footer from "../Footer";
import Nav2 from "../Nav2";
import { Heading, Container } from "@chakra-ui/react";
export default function Home2() {
  return (
    <>
      <Container maxW={"80%"}>
        <div>
          <Nav2 />

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
            <h1 className="display-2">Top Companies Hiring Now</h1>
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
          <br />
          {/* secound crousale  */}
          <h1 className="display-2">Featured Companies Actively Hiring</h1>
          <br />
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src="https://www.equitybulls.com/equitybullsadmin/uploads/WIPRO%20Limited%202.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="2000" />
              <img src="https://www.xicom.biz/images/socials/xicom-technologies.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://cdn.contactcenterworld.com/images/company/dhl-india-1200px-logo.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
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
            data-bs-target="#carouselExampleInterval"
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
      </Container>
    </>
  );
}
