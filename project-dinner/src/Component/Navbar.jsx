import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
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
            <li className="nav-item mx-3">
              <Link
                to="/services"
                className="nav-link active"
                aria-current="page"
              >
                Services
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link to="/login" className="nav-link active mx-3" aria-current="page">
              Log-in
            </Link>

            <Link
              to="/signup"
              className="nav-link active mx-3"
              aria-current="page"
            >
              Sign-up
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
