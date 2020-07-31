import React, {useContext } from "react";
import ReactRotatingText from 'react-rotating-text';
import Footer from "../components/Footer";

import { LANDING_DATA } from '../data/userData';

import landingImg from '../data/lead-bg.jpg';

import  { ThemeContext } from '../theme-context';

const Landing = () => {
  const { name, rotateTextItems } = LANDING_DATA;
  const { theme } = useContext(ThemeContext);
  return (
    <React.Fragment>
      <div style={{background: landingImg }} id="lead">
        <div id="lead-content">
          <h1>{name}</h1>
          <h2 style={{color: theme.imageHighlight, marginTop: '1rem'}}><ReactRotatingText items={rotateTextItems} /></h2>
          <a href="#" style={{}} className="btn-rounded-white">
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
