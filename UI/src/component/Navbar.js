import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  content-right  py-0">
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav  ">
            <li className="nav-item d-flex">
              {/* <a className="nav-link active   fw-bolder " aria-current="page">
                Blog
              </a> */}
              <Link to="/blog" className="nav-link active fw-bolder">
              Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link fw-bolder">
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link fw-bolder">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
