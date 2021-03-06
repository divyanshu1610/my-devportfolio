import React, { useContext, useState } from "react";

import { NavLink } from "react-router-dom";

import { REPO_NAME } from "../data/userData";
import { ThemeContext } from "../theme-context";

const Header = ({ toggle , setToggle }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={ toggle ? "active" : " "}>
      <div onClick={() => setToggle(false)} style={{color: theme.text}} id="mobile-menu-close">
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
      <ul id="menu" className="shadow">
        <li>
          <NavLink
            exact
            activeStyle={{ background: theme.highlight }}
            style={{ color: theme.text }}
            to={`/${REPO_NAME}`}
          >
            <i className="fa fa-home"></i>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/about">About</NavLink>
        </li> */}
        <li>
          <NavLink
            activeStyle={{ background: theme.highlight }}
            style={{ color: theme.text }}
            to="/experience"
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ background: theme.highlight }}
            style={{ color: theme.text }}
            to="/education"
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ background: theme.highlight }}
            style={{ color: theme.text }}
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ background: theme.highlight }}
            style={{ color: theme.text }}
            to="/skills"
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ background: theme.highlight }}
            style={{ color: theme.text }}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
