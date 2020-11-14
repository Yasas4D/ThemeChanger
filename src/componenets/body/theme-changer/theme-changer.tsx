import React from "react";
import { useThemeContextCustomHook } from "../../use-context/ThemeContextCustomHook";
import "./themeChanger.css";

export const ThemeChanger = () => {
  const { themeName, setThemeName } = useThemeContextCustomHook()!;

  return (
    <React.Fragment>
      <h1>Select a theme</h1>
      <div className="select">
        <select
          value={themeName}
          onChange={(e) => setThemeName(e.target.value)}
        >
          <option value="theme-dark" selected>
            Dark
          </option>
          <option value="theme-light">Light</option>
          <option value="theme-frost">Frost</option>
          <option value="theme-mango">Mango</option>
          <option value="theme-sunset">Sunset</option>
          <option value="theme-rainbow">Rainbow</option>
          <option value="theme-unicorn">Unicron</option>
        </select>
      </div>
    </React.Fragment>
  );
};
