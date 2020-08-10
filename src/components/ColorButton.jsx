import React, { useContext } from "react";

import { ThemeContext } from "../theme-context";

const ColorButton = ({ theme, icon }) => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={() => setTheme(theme)}
      style={{
        backgroundColor: theme.imageHighlight,
        width: "48px",
        height: "48px",
        color: "#FFF",
      }}
      className="rounded-circle btn"
    >
      {icon && <i className="fas fa-palette"></i>}
    </div>
  );
};

export default ColorButton;
