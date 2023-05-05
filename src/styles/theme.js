import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#808080",
    },
    secondary: {
      main: "#7f7f7f",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
