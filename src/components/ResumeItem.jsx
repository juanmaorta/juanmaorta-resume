import React, { useContext } from "react";
import { SiteConfigContext } from "../Context";

const ResumeItem = ({index, title, place, yearRange, desc}) => {
  const { darkTheme } = useContext(SiteConfigContext);

  console.log(desc);

  return (
      <div
      key={index}
      className={
        "bg-white  rounded p-4 mb-4 " +
        (darkTheme ? "bg-dark" : "bg-white border")
      }
    >
      <p className="badge bg-primary text-2 fw-400">
        {yearRange}
      </p>
      <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
        {title}
      </h3>
      <p className={darkTheme ? "text-primary" : "text-danger"}>
        {place}
      </p>
      <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
        <ul>
          {desc.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </p>
    </div>
  );
}

export default ResumeItem;