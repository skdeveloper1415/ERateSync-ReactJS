import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers/theme';
import globalState from './slices/globalState';

export default configureStore({
  reducer: {
    currentTheme: themeReducer,
    "global": globalState,
  },
});