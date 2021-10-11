import React, { FC } from "react";
import Movies from "./components/Movies";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";

const App: FC = () => {
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <Movies />
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
