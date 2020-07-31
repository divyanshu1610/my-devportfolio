import React, { useContext } from "react";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";

import Tada from "react-reveal/Tada";

// import SocialMedia from "../../components/SocialMedia";
import ContactImg from "./ContactImg";
import { CONTACT_DATA } from "../../data/userData";

import { ThemeContext } from "../../theme-context";

import "./Contact.css";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const { socialLinks, headerText, subText } = CONTACT_DATA;

  const links = socialLinks.map(({ link, icon }) => {
    return (
      <a
        key={icon}
        href={link}
        className={`icon-button ${icon}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Tada>
          <i className={`fab fa-${icon}`}></i>
        </Tada>
        <span></span>
      </a>
    );
  });

  return (
    <React.Fragment>
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="heading-img-div">
              <ContactImg theme={theme} />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {headerText}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {subText || emoji("Drop a Hi 👋")}
              </p>
              {/* <SocialMedia /> */}
              <div className="social-media-div align-center">{links}</div>
              {/* <div className="resume-btn-div">
                <a href="#" style={{color: theme.text}}  className="btn-rounded-white">
                  Download Resume
                </a>
              </div> */}
            </div>
          </div>
        </Fade>
      </div>
    </React.Fragment>
  );
};

export default Contact;
