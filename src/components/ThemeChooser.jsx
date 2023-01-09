import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { themeChooser } from "../redux/themeSlice";

function ThemeChooser() {
  const [themeVal, setThemeVal] = useState(1);
  const dispatch = useDispatch();

  const handleThemeChange = (e) => {
    setThemeVal(e.target.value);
    dispatch(themeChooser(Number(e.target.value)));
  };

  return (
    <nav className="flex">
      <h3 className="text-sm mr-3 text-theme-base">Theme</h3>
      <input
        onChange={handleThemeChange}
        type="range"
        min="1"
        max="3"
        value={themeVal}
        step="1"
      />
    </nav>
  );
}
export default ThemeChooser;
