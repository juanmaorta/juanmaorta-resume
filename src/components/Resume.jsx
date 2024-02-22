import React, {useContext} from "react";
import { ProfessionalDataContext } from "../Context";
import resumeFile from "../documents/resume.pdf";

import Skills from "./Skills";
import ResumeBlock from "./ResumeBlock";

const Resume = ({ classicHeader, darkTheme }) => {

  const { education: educationDetails, experience: experienceDetails, skills } = useContext(ProfessionalDataContext);

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          <ResumeBlock title="My Experience" darkTheme={darkTheme} data={experienceDetails}/>
          <ResumeBlock title="My Education" darkTheme={darkTheme} data={educationDetails}/>
        </div>
        {/* My Skills */}
        <Skills darkTheme={darkTheme} skills={skills}/>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
