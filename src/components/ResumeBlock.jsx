import React, { useContext } from "react";
import { SiteConfigContext } from "../Context";
import ResumeItem from "./ResumeItem";

const ResumeBlock = ({data, title}) => {
  const { darkTheme } = useContext(SiteConfigContext);

  return (
      <div className="col-md-6">
      <h2
        className={
          "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
        }
      >
        {title}
      </h2>
      {data.length > 0 &&
        data.map(({desc, place, title, yearRange}, index) => (
          <ResumeItem
            index={index}
            title={title}
            place={place}
            yearRange={yearRange}
            desc={desc}
          />
        ))}
    </div>
  );
}

export default ResumeBlock;