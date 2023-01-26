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
    <nav className="flex justify-end px-6 md:px-12">
      <div className="flex flex-col items-center">
        <h3 className="text-sm text-theme-primary mb-2">Choose a theme!</h3>
        <input
          onChange={handleThemeChange}
          type="range"
          min="1"
          max="3"
          value={themeVal}
          step="1"
        />
        <ul className="flex justify-between w-full text-theme-primary text-sm">
          <li>Dark</li>
          <li>Light</li>
          <li>Fun</li>
        </ul>
      </div>
    </nav>
  );
}
export default ThemeChooser;
