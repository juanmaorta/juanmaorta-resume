import React, {useContext} from "react";
import { ContactDataContext } from "../../Context";
import SocialItem from "./SocialItem";

const Social = ({ variant }) => {
    const { social } = useContext(ContactDataContext);

    const className = (variant === "small") 
        ? "social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex"
        : "social-icons justify-content-center justify-content-md-start ";
    
    return (
        <ul className={className}>
            {social.map(({icon, iconClass, title, url}, idx) => {
                return <SocialItem url={url} iconClass={iconClass} icon={icon} title={title} key={`social_${idx}`}/>
            })}
            
        </ul>
        );
}

export default Social;