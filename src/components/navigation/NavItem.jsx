import React from "react";
import { Link } from "react-scroll";
const NavItem = ({ homeRef, setIsNavModalClose, title, to }) => {

    return (
        <li className="nav-item">
        <Link
          activeClass="active"
          className="nav-link "
          duration={500}
          smooth
          spy
          style={{ cursor: "pointer" }}
          target={homeRef ? homeRef : ""}
          to={to}
          onClick={(e) => {
            e.preventDefault();
            setIsNavModalClose(true);
          }}
        >
          {title}
        </Link>
      </li>
    );
}

export default NavItem;