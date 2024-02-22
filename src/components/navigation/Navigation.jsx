import React from "react";
import NavItem from "./NavItem";

const sections = [
    {
        title: "Home",
        to: "home",
    },
    {
        title: "About Me",
        to: "about",
    },
    {
        title: "Resume",
        to: "resume",
    },
    {
        title: "Contact",
        to: "contact",
    },
];

const Navigation = ({ homeRef, setIsNavModalClose }) => {
    return (
        <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
            {sections.map(({to, title}, idx) => {
                return <NavItem homeRef={homeRef} setIsNavModalClose={setIsNavModalClose} to={to} title={title} key={`nav_${idx}`}/>
            })}
            
        </ul>
        );
}

export default Navigation;