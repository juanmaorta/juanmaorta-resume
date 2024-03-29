import React, { useContext } from "react";
import { PersonalDataContext, SiteConfigContext } from "../Context";

const Footer = ({ handleNavClick }) => {
  const { classicHeader, darkTheme } = useContext(SiteConfigContext);
  
  const { firstName, lastName } = useContext(PersonalDataContext);
  return (
    <footer
      id="footer"
      className={"section " + (darkTheme ? "footer-dark bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        <div className="row">
          <div className="col-lg-6 text-center text-lg-start">
            <p className="mb-3 mb-lg-0">
              Copyright © 2024{" "}
              <a
                href="#home"
                className="fw-500"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("home");
                }}
              >
                {`${firstName} ${lastName}`}
              </a>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
