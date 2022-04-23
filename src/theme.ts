import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const primary = "#ffbe00"; //'#51b1f8' //blue
const secondary = "#231632"; //"#D3E0EA"; //gray

export default createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    htmlFontSize: 10,
    h1: {
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // root: {
        //   borderRadius: '50rem'
        // },
        contained: {
          color: "white",
        },
      },
    },
    // MuiTab: {
    //   defaultProps: {
    //     disableRipple: true // No more ripple!
    //   }
    // }
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: "50rem",
    //     },
    //   },
    // },
  },
});
