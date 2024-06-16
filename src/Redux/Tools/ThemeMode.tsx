import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode:"light"
};

// eslint-disable-next-line react-refresh/only-export-components
const ThemeMode = createSlice({
  name: "ThemeMode",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    }
  },
});

export const { setMode } = ThemeMode.actions;
export default ThemeMode.reducer;
