"use client";

import { createTheme } from "@mui/material/styles";

const ThemeHelper = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: 'Satoshi-Variable',
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#fff",
          }),
        }),
      },
    },
  },
});

export default ThemeHelper;
