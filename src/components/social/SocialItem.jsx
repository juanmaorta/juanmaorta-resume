import React from "react";
import { Tooltip } from "../Tooltip";

const SocialItem = ({icon, iconClass, title, url}) => {
    return (
        <li className={iconClass}>
        <Tooltip text={title} placement="top">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fab ${icon}`} />
          </a>
        </Tooltip>
      </li>
    );
}

export default SocialItem;