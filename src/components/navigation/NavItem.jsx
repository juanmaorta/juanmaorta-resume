import React from "react";
import { Link } from "react-scroll";
const NavItem = ({ homeRef, setIsNavModalClose, title, to }) => {

    return (
        <li className="nav-item">
        <Link
          target={homeRef}
          className="nav-link "
          smooth
          duration={500}
          style={{ cursor: "pointer" }}
          activeClass="active"
          spy
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