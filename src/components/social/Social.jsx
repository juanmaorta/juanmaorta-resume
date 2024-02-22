import React, {useContext} from "react";
import { ContactDataContext } from "../../Context";
import SocialItem from "./SocialItem";
// <ul className="social-icons social-icons-light"></ul>

const getListClassName = (variant) => {
    switch(variant) {
        case "small":
            return "social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex";
        case "classic":
            return "social-icons social-icons-light";
        default:
            return "social-icons justify-content-center justify-content-md-start";
    }
}

const Social = ({ variant }) => {
    const { social } = useContext(ContactDataContext);

    const className = getListClassName(variant);
    return (
        <ul className={className}>
            {social.map(({icon, iconClass, title, url}, idx) => {
                return <SocialItem url={url} iconClass={iconClass} icon={icon} title={title} key={`social_${idx}`}/>
            })}
            
        </ul>
        );
}

export default Social;