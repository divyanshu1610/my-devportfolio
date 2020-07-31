import React, { useContext } from "react";
import Fade from "react-reveal";

import EducationImg from "./EducationImg";

import { EDUCATION_DATA } from "../../data/userData";
import { ThemeContext } from "../../theme-context";

import "./Education.css";


const Education = () => {
  const { educations, certificates, headerText, subText, secondaryText } = EDUCATION_DATA;
  const { theme } = useContext(ThemeContext);
  // education items
  let left = false;
  const eduItems = educations.map((edu) => {
    const { instituteName, course, description, duration, location } = edu;
    left = !left;
    return (  
      <Fade key={instituteName+course} left={left} right={!left}>
        <div className="card mt-2">
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
        <div className="background-alt m-auto w-50">
          {/* <h2 className="heading">Degrees</h2> */}
          {eduItems}
          {/* <h2 className="heading">Certificates</h2> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Education;
