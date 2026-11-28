import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#151515",
    },
  },
  components: {
    MuiGrid: {
      defaultProps: {
        size: {
          xs: 2, 
          sm: 4, 
          md: 4,
        },
      },
    },
  },
});
