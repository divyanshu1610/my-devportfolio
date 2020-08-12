import React, { useContext } from "react";
import Fade from "react-reveal";

import EducationImg from "./EducationImg";

import { EDUCATION_DATA, REPO_NAME } from "../../data/userData";
import { ThemeContext } from "../../theme-context";

import "./Education.css";

const Education = () => {
  const {
    educations,
    certificates,
    headerText,
    subText,
    secondaryText,
  } = EDUCATION_DATA;
  const { theme } = useContext(ThemeContext);
  // education items
  let left = false;
  const eduItems = educations.map((edu) => {
    const { instituteName, course, description, duration, location } = edu;
    left = !left;
    return (
      <Fade key={instituteName + course} left={left} right={!left}>
        <div className="card m-2">
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: theme.text }}
            >{`${instituteName}, ${location}`}</h5>
            <p className="card-text mb-1">{course}</p>
            <footer className="blockquote-footer pt-0">{duration}</footer>
          </div>
        </div>
      </Fade>
    );
  });

  const certiItems = certificates.map((certi) => {
    const { image, link, title, description } = certi;

    return (
      <div key={title} className="card" style={{ width: "18rem;" }}>
        <img
          alt="..."
          className="card-img-top"
          src={`${REPO_NAME}/assets/${image}`}
        />

        <div className="card-body">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={link}
            className="card-title"
          >
            {title}
          </a>
          <p className="card-text">{description}</p>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                {headerText}
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                {subText}
              </h3>
            </div>
          </div>
        </Fade>
        <div className="background-alt container p-1">
          <h2 className="heading p-1">Degrees</h2>
          {eduItems}
          {certificates.length > 0 && (
            <React.Fragment>
              <h2 className="heading p-2 ">Certificates</h2>
              <div className="card-columns m-auto mt-0 pt-0">{certiItems}</div>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Education;
