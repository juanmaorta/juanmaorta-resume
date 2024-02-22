import React from "react";

const Skills = ({darkTheme, skills}) => {
    return (
        <>
        <h2
        className={
          "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
        }
      >
        My Skills
      </h2>
      <div className="row gx-5">
        {skills.length > 0 &&
          skills.map(({name, percent}, index) => (
            <div key={index} className="col-md-6">
              <p
                className={
                  " fw-500 text-start mb-2 " +
                  (darkTheme ? "text-light" : "text-dark")
                }
              >
                {name}{" "}
                <span className="float-end">{percent}%</span>
              </p>
              <div
                className={
                  "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                }
              >
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: percent + "%" }}
                  aria-valuenow={percent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          ))}
      </div>
      </>
    );
}

export default Skills;