import React, { useContext } from "react";
import Fade from "react-reveal";

import ExperienceImg from "./ExperienceImg";

import { ThemeContext } from "../../theme-context";

import { EXPERIENCE_DATA } from "../../data/userData";

import "./Experience.css";

const Before = ({ bg }) => {
  return (
    <div
      style={{
        position: "absolute",
        content: "",
        top: 0,
        bottom: 0,
        left: "303px",
        right: "auto",
        height: "100%",
        width: "3px",
        background: `${bg}`,
        zIndex: 0,
      }}
    ></div>
  );
};

const After = ({ bg }) => {
  return (
    <div
      style={{
        position: "absolute",
        content: "",
        top: "100%",
        left: "303px",
        height: "40px",
        width: "3px",
        background: "linear-gradient(" + bg + ",#fff)",
      }}
    ></div>
  );
};

const Experience = () => {
  const {
    timelineIcon,
    experiences,
    headerText,
    subText,
    secondaryText,
  } = EXPERIENCE_DATA;
  const {theme} = useContext(ThemeContext);

  const experienceItems = experiences.map((exp, i) => {
    const { employerName, jobTitle, timeline, description } = exp;
    return (
      <div key={employerName + i} className="vtimeline-point">
        <div
          style={{ background: theme.jacketColor }}
          className="vtimeline-icon"
        >
          <i className={"fa " + timelineIcon}></i>
        </div>
        <div className="vtimeline-block">
          <span className="vtimeline-date">{timeline}</span>
          <div data-date={timeline} className="vtimeline-content">
            <h3 style={{ color: theme.text }}>{employerName}</h3>
            <h4>{jobTitle}</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="experience-main">
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {headerText}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {subText}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {secondaryText}
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div id="experience" className="background-alt">
        <Fade>
          <div id="experience-timeline">
            <Before bg={theme.jacketColor} />
            {experienceItems}
            <After bg={theme.jacketColor} />
          </div>
        </Fade>
      </div>
    </React.Fragment>
  );
};

export default Experience;
