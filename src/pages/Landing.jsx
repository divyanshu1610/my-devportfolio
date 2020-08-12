import React, {useContext } from "react";
import ReactRotatingText from 'react-rotating-text';
import Footer from "../components/Footer";

import { LANDING_DATA, REPO_NAME } from '../data/userData';
import  { ThemeContext } from '../theme-context';

const Landing = () => {
  const { name, rotateTextItems, bgImage, resumeLink } = LANDING_DATA;
  const { theme } = useContext(ThemeContext);

  const bgImgPath = `url(/${REPO_NAME}/assets/${bgImage})`;

  return (
    <React.Fragment>
      <div style={{ background: bgImgPath }} id="lead">
        <div id="lead-content">
          <h1>{name}</h1>
          <h2 style={{color: theme.imageHighlight, marginTop: '1rem'}}><ReactRotatingText items={rotateTextItems} /></h2>
          <a href={resumeLink} className="btn-rounded-white">
            Download Resume
          </a>
        </div>
        <div style={{ background: `${theme.text}7F`}} id="lead-overlay"></div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
