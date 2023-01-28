import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { themeChooser } from "../redux/themeSlice";
import { SunIcon, MoonIcon, SparklesIcon } from "@heroicons/react/24/outline";
import RadioButton from "./ui/RadioButton";

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
        <div className="relative flex justify-between w-full text-theme-primary text-sm bg-theme-main-fill p-0.5 pr-1 z-30 rounded-md" onChange={handleThemeChange}>
          <div
            className={`absolute bg-theme-button-secondary z-10 w-16 h-5 rounded-md transition-transform translate-x-0 traslate-x-theme-selector-${themeVal}`}
          ></div>
          <RadioButton checked={themeVal === 1} value={1}>
            <MoonIcon className="w-4 h-4 mr-1" /> Dark
          </RadioButton>
          <RadioButton checked={themeVal === 2} value={2}>
            <SunIcon className="w-5 h-5 mr-1" /> Light
          </RadioButton>
          <RadioButton checked={themeVal === 3} value={3}>
          <SparklesIcon className="w-4 h-4 mr-1" /> Party
          </RadioButton>

          {/* <div className="z-20 flex items-center px-2">
            <MoonIcon className="w-4 h-4 mr-1" />
            Dark
          </div>
          <div className="z-20 flex items-center px-2">
            <SunIcon className="w-5 h-5 mr-1" />
            Light
          </div>
          <div className="z-20 flex items-center px-2">
            <SparklesIcon className="w-4 h-4 mr-1" />
            Fun
          </div> */}
        </div>
      </div>
    </nav>
  );
}
export default ThemeChooser;
