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

const getListClassName = (variant) => {
    switch(variant) {
        case "classic":
            return "navbar-nav text-lg-center my-lg-auto py-lg-3";
        default:
            return "navbar-nav";
    }
}

const Navigation = ({ isClassic, homeRef, setIsNavModalClose, variant }) => {
    const className = getListClassName(variant);

    return (
        <ul className={className}>
            {sections.map(({to, title}, idx) => {
                return <NavItem 
                    homeRef={homeRef} 
                    setIsNavModalClose={setIsNavModalClose} 
                    title={title}
                    to={to} 
                    key={`nav_${idx}`}/>
            })}
        </ul>
        );
}

export default Navigation;