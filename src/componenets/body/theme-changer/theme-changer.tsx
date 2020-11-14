import React, { useState } from "react";
import { useThemeContextCustomHook } from "../../use-context/ThemeContextCustomHook";
import "./themeChanger.css";

export const ThemeChanger = () => {
  const [state, setstate] = useState("initTheme");
  const {
    userId,
    customerId,
    setUserId,
    setCustomerId,
  } = useThemeContextCustomHook()!;

  return (
    <React.Fragment>
      <h1>Select a theme</h1>
      <div className="select">
        <select value={state} onChange={(e) => setstate(e.target.value)}>
          <option selected disabled>
            Choose an option
          </option>
          <option value="1">Pure CSS</option>
          <option value="2">No JS</option>
          <option value="3">Nice!</option>
        </select>
      </div>
    </React.Fragment>
  );
};
