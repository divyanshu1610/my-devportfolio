import React, { useContext } from "react";

import { ThemeContext } from "../theme-context";

const ColorButton = ({ theme }) => {

  const { setTheme } = useContext(ThemeContext); 

  return (
    <div
      onClick={() => setTheme(theme)}
      style={{
        backgroundColor: theme.imageHighlight,
        width: "48px",
        height: "48px",
      }}
      className="rounded-circle btn"
    ></div>
  );
};

export default ColorButton;
