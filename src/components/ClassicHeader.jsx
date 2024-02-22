import React from "react";
import { Link } from "react-scroll";
import { useState, useContext } from "react";
import { PersonalDataContext } from "../Context";
import Navigation from "./navigation/Navigation";
import Social from "./social/Social";


const ClassicHeader = ({ handleNavClick }) => {
  const { firstName } = useContext(PersonalDataContext);
  const [stickyHeader, setStickyHeader] = useState(false);
  const [isNavModalClose, setIsNavModalClose] = useState(true);

  const checkScrollTop = () => {
    let header = document.getElementsByClassName("primary-menu");

    if (header) {
      if (
        document.body.scrollTop > 180 ||
        document.documentElement.scrollTop > 180
      ) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  return (
    <header id="header" className="sticky-top-slide">
      {/* Navbar */}
      <nav
        className={
          "primary-menu navbar navbar-expand-lg navbar-dark bg-transparent border-bottom-0 sticky-top " +
          (stickyHeader ? "sticky-on" : "")
        }
      >
        <div className="container-fluid position-relative g-lg-4">
          <div className="col-auto col-lg-2">
            {/* Logo */}
            <Link
              smooth
              duration={500}
              style={{ cursor: "pointer" }}
              className="logo"
              to="home"
              title={firstName}
              onClick={(e) => {
                e.preventDefault();
                setIsNavModalClose(true);
              }}
            >
              {" "}
              <img src="images/logo-light.png" alt={firstName} />{" "}
            </Link>
            {/* Logo End */}
          </div>
          <div className="col col-lg-8 navbar-accordion">
            <button
              onClick={(e) => {
                setIsNavModalClose(!isNavModalClose);
              }}
              className={
                isNavModalClose
                  ? "navbar-toggler ms-auto"
                  : "navbar-toggler ms-auto show"
              }
              id="navbar-toggler"
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
            <div
              id="header-nav"
              className={
                isNavModalClose
                  ? "collapse navbar-collapse justify-content-center "
                  : "show navbar-collapse justify-content-center"
              }
            >
              <Navigation setIsNavModalClose={setIsNavModalClose} variant="classic" />
            </div>
          </div>
          <div className="col-auto col-lg-2 d-flex justify-content-end">
            <Social variant="classic"/>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default ClassicHeader;
