import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Jobs from "../Component/Jobs";
import Company from "./Company";
import JobDetails from "./JobDetails";
import Nav2 from "./Nav2";
import Home2 from "./pages/Home2";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/job" element={<Jobs />} />
        <Route path="/company" element={<Company />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/Navbar2" element={<Nav2 />} />
        <Route path="/h" element={<Home2 />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
