import React, { useContext } from "react";
import { Fade} from "react-reveal";

import Spacer from "../../components/Spacer";
import ProjectImg from "./ProjectImg";

import { ThemeContext } from "../../theme-context";

import { PROJECT_DATA } from "../../data/userData";

import "./Project.css";

const Project = () => {
  const {theme} = useContext(ThemeContext);
  const { projects, headerText, subText } = PROJECT_DATA;

  const projectItems = projects.map((project) => {
    const { image, name, description, footnote } = project;
    return (
      <Fade key={name} duration={2000} bottom>
        <div className="card">
          {image && (
            <img src={`/assets/${image}`} className="card-img-top" alt="..." />
          )}
          <div className="card-body">
            <h5  style={{color: theme.dark}} className="card-title">{name}</h5>
            <p style={{color: theme.text}} className="card-text">{description}</p>
            {footnote && (
              <p className="card-text">
                <small className="text-muted">{footnote}</small>
              </p>
            )}
          </div>
        </div>
      </Fade>
    );
  });

  return (
    <React.Fragment>
      <Spacer />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {headerText}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.text }}
              >
                {subText}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="card-columns m-auto">{projectItems}</div>
    </React.Fragment>
  );
};

export default Project;
