import React, { useContext } from "react";
import { Fade } from "react-reveal";
import  Tada  from 'react-reveal/Tada';

import { ThemeContext } from "../../theme-context";

import SkillsImg from "./SkillsImg";

import { SKILLS_DATA, REPO_NAME } from "../../data/userData";
import "./Skills.css";

const Skills = () => {
  const {theme} = useContext(ThemeContext);
  const { headerText, skills } = SKILLS_DATA;

  const skillItems = skills.map(({ name, image }) => {
    return (
      <Tada key={name}>
        <li className="skill-icon">
          <img src={`${REPO_NAME}/assets/${image}`} alt="..." />
          <p style={{ color: theme.text }} className="skill-name">
            {name}
          </p>
        </li>
      </Tada>
    );
  });

  return (
    <React.Fragment>
      <div className="basic-skills">
        <div className="skills-main-div">
          <Fade left duration={2000}>
            <div className="skills-image-div">
              <SkillsImg theme={theme} />
            </div>
          </Fade>
          <div className="skills-text-div">
            <Fade right duration={1000}>
              <h1
                className="skills-header"
                style={{ color: theme.text, marginTop: "2rem" }}
              >
                {headerText}
              </h1>
            </Fade>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <ul className="skill-icons">{skillItems}</ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
