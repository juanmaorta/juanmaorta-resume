import React, {useContext} from "react";
import { PersonalDataContext, ContactDataContext, ProfessionalDataContext, SiteConfigContext } from "../Context";
import resumeFile from "../documents/juanma-orta-frontend-engineer.pdf";
const AboutUs = () => {
  const { classicHeader, darkTheme } = useContext(SiteConfigContext);

  const { firstName, lastName } = useContext(PersonalDataContext);
  const { email, city, country } = useContext(ContactDataContext);
  const { title } = useContext(ProfessionalDataContext);
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">{`${firstName} ${lastName}`},</span> a {title}
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
              I am a Senior Frontend Developer with strong backend skills and a keen interest in new technologies. I am proficient in JavaScript, especially TypeScript, ReactJS, jQuery, and CSS for frontend development. I demonstrate expertise in JavaScript best practices and tooling, utilizing ESLint, Webpack, and possess knowledge of CI/CD pipelines for seamless integration and deployment workflows.
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>{`${firstName} ${lastName}`}
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>{`${city} ${country}`}
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
          </div>
        </div>
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
