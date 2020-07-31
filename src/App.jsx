import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Landing from "./pages/Landing";
// import About from "./pages/About";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import Project from "./pages/Project/Project";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";

import ThemeChooser from './components/ThemeChooser';

import { themes, ThemeContext } from "./theme-context";

import { SELECTED_THEME, REPO_NAME } from './data/userData';

function App() {

  const THEMES = [ themes.purpleTheme, themes.orangeTheme, themes.pinkTheme, themes.blueTheme];
  const initialThemes = THEMES.filter(t => t.text !== SELECTED_THEME.text);

  const [state, setState] = useState({theme: SELECTED_THEME, allThemes: initialThemes });
  
  const setNewTheme = (theme) => {
    const newThemes = THEMES.filter(t => t.text !== theme.text);
    setState({
      theme,
      allThemes: newThemes,
    });
  }

  return (
    <Router>
      <ThemeContext.Provider value={{theme: state.theme , setTheme: setNewTheme}}>
      <Header />
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/projects">
            <Project />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
        <ThemeChooser currentTheme={state.theme} themes={state.allThemes} />
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
