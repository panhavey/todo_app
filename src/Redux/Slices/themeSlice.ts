import {lightTheme, darkTheme} from './../../Constants/theme';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Theme} from '../../Constants/types';

const themeSlice = createSlice({
  name: 'theme',
  initialState: lightTheme as Theme,
  reducers: {
    switchTheme: (state, {payload}: PayloadAction<Theme>) => {
      return payload;
    },
  },
});

export const {switchTheme} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
