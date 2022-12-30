import React, {useState} from 'react';

function ThemeChooser() {
  const [themeVal, setThemeVal] = useState(1);

  const handleThemeChange = e => setThemeVal(e.target.value);

  return (
    <nav className="flex">
      <h3 className="text-sm mr-3 text-white">Theme</h3>
      <input onChange={handleThemeChange} type="range" min="1" max="3" value={themeVal} step="1" />
    </nav>
  );
}
export default ThemeChooser;