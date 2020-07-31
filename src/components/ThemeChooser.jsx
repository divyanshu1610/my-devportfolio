import React from "react";
import { Planet } from "react-planet";
import ColorButton from "./ColorButton";

const ThemeChooser = ({ currentTheme, themes }) => {
  return (
    <div style={{
        position: 'fixed',
        bottom: '100px',
        right: '100px',
        zIndex: 999,
    }} >
      <Planet
        centerContent={<ColorButton theme={currentTheme} />}
        autoClose
        hideOrbit
        orbitRadius={50}
        bounceOnClose
        rotation={200}
        // the bounce direction is minimal visible
        // but on close it seems the button wobbling a bit to the bottom
        bounceDirection="BOTTOM"
      >
        {themes.map((theme, i) => (
          <ColorButton key={i} theme={theme} />
        ))}
      </Planet>
    </div>
  );
};

export default ThemeChooser;
