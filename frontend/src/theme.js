import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Commissioner",
    subtitle1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: "#8075FF",
    },
    secondary: {
      main: "#878688",
    },
    background: {
      main: "#373638",
    },
    text: {
      secondary: {
        main: "black",
      },
    },
  },
});
