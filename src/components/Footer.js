import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="d-flex justify-content-center align-items-center py-3 border-top fixed-bottom bg-dark">
        <p className="col-md-4 mb-0 text-muted px-4">© 2023 HungryFood, Inc</p>

        <Link
          to="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        ></Link>

        <ul className="nav col-md-4 justify-content-end px-4  ">
        <li className="nav-item">
            <a
              href="https://www.linkedin.com/"
              className="nav-link px-2 text-muted"
            >
            <i  className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        <li className="nav-item">
            <a
              href="https://twitter.com/"
              className="nav-link px-2 text-muted"
            >
             <i  className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="www.facebook.com"
              className="nav-link px-2 text-muted"
            >
            <i  className="fa-brands fa-square-facebook"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.google.com/"
              className="nav-link px-2 text-muted"
            >
              <i  className="fa-brands fa-google "></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.instagram.com/"
              className="nav-link px-2 text-muted"
            >
             <i  className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="/Home" className="nav-link px-2 text">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="/About" className="nav-link px-2 text">
              About
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
