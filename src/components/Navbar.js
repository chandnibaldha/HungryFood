import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "../Model";
import Cart from "../screen/Cart";
import { useCart } from "../screen/contextReducer";
import foodlogo from "./foodlogo.png";
const Header = () => {
  const [cartView, setCartView] = useState(false);
  let location = useLocation();
  const handleLogOut = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("key");
    localStorage.removeItem("user")
    localStorage.removeItem("restaurant")
    localStorage.removeItem("location")
  };
  const loadCart = () => {
    setCartView(true);
  };

  const items = useCart();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <img src={foodlogo} alt="logo" srcSet="" style={{width : '4rem'}} className = 'me-2 ms-3' />
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            Hungry Food
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav  me-auto mb-2">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  } fs-5`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/About" ? "active" : ""
                  } fs-5`}
                  aria-current="page"
                  to="/About"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/ContactUs" ? "active" : ""
                  } fs-5`}
                  aria-current="page"
                  to="/ContactUs"
                >
                  ContactUs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/ContactUs" ? "active" : ""
                  } fs-5`}
                  aria-current="page"
                  to="/Feedback"
                >
                 Feedback
                </Link>
              </li>

              {localStorage.getItem("user")=== "seller" ? (
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  } fs-5`}
                  aria-current="page"
                  to="/additem"
                >
                  Add item
                </Link>
              </li>
               ) : (
                ""
              )}
              {localStorage.getItem("key") ? (
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/myorder" ? "active" : ""
                    } fs-5`}
                    aria-current="page"
                    to="/myorder"
                  >
                    My Order
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("key") ? (
              <div className="d-flex">
                <Link className="fs-5 btn btn-dark mx-2" to="/login">
                  Login
                </Link>
                <Link className="fs-5 btn btn-dark mx-2" to="/register">
                  Register
                </Link>
              </div>
            ) : (
              <div>
                <Link className="fs-5 btn bg-white text-dark btn-dark mx-2 position-relative" onClick={loadCart}>
                  <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                    {items.length}
                  </span>
                  My Cart
                </Link>
                {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
                <Link
                  className="fs-5 btn btn-danger mx-2"
                  to="/login"
                  onClick={handleLogOut}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
