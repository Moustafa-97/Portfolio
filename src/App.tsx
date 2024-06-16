import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useMemo } from "react";
import { createTheme, CssBaseline, PaletteMode } from "@mui/material";
import { grey, blueGrey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import useThemeDetector from "./hooks/useThemeDetector";
import { setMode } from "./Redux/Tools/ThemeMode";
import MainApp from "./Routes/MainApp";

interface RootState {
  theme: {
    mode: string;
  };
}

// dark mode control
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: grey,
          divider: grey[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: blueGrey,
          divider: blueGrey[700],
          background: {
            default: blueGrey[900],
            paper: blueGrey[900],
          },
          text: {
            primary: "#fff",
            secondary: blueGrey[500],
          },
        }),
  },
});

function App() {
  const dispatch = useDispatch();
  const mode: string = useSelector((state: RootState) => state.theme.mode);
  const [isDarkTheme] = useThemeDetector();

  useEffect(() => {
    isDarkTheme ? dispatch(setMode("dark")) : dispatch(setMode("light"));
  }, [dispatch, isDarkTheme]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainApp />
      </ThemeProvider>
    </>
  );
}

export default App;
