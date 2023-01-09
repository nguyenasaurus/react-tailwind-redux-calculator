import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { themeChooser } from '../redux/themeSlice';

function ThemeChooser() {
  const theme = useSelector(state => state.theme.themeName)
  const [themeVal, setThemeVal] = useState(1);
  const dispatch = useDispatch();

  const handleThemeChange = e => {
    setThemeVal(e.target.value);
    dispatch(themeChooser(Number(e.target.value)))
  };

  useEffect(() => {
    console.log(theme)
  }, [theme])
  
  return (
    <nav className="flex">
      <h3 className="text-sm mr-3 text-white">Theme</h3>
      <input onChange={handleThemeChange} type="range" min="1" max="3" value={themeVal} step="1" />
    </nav>
  );
}
export default ThemeChooser;