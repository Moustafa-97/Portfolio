import { configureStore } from "@reduxjs/toolkit";
import ThemeMode from "../Tools/ThemeMode";

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    theme: ThemeMode,
  },
});
