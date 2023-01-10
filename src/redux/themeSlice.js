import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    themeName: 'dark'
  },
  reducers: {
    themeChooser: (_state, action) => {
      switch(action.payload) {
        case 2:
          return {
            themeName: 'light'
          }
        case 3:
          return {
            themeName: 'party'
          }
        default:
          return {
            themeName: 'dark'
          }
      }
    }
  }
})

export const { themeChooser } = themeSlice.actions;
export default themeSlice.reducer;