import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav2 = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark popay ">
      <div className=" container container-fluid">
        <Link to="/h" className="navbar-brand">
          JOB-Finder
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <Link to="/job" className="nav-link active" aria-current="page">
                Job
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                to="/company"
                className="nav-link active"
                aria-current="page"
              >
                Companies
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link to="/" className="nav-link active mx-3" aria-current="page">
              Log-out
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav2;
