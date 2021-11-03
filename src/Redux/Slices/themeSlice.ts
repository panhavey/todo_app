import {lightTheme, darkTheme} from './../../Constants/theme';
import {createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: lightTheme,
  reducers: {
    switchTheme: state => {
      return state.dark ? lightTheme : darkTheme;
    },
  },
});

export const {switchTheme} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
