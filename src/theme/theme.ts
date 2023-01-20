import { createTheme, Interpolation, Theme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {},
});

export const globalStyles: Interpolation<Theme> = {
  html: {
    scrollBehavior: "smooth",
  },
  body: {
    backgroundColor: "#2c2c2c",
    color: "#ffffff",
    fontFamily: "'Ubuntu', sans-serif",
    fontWeight: "400",
    minHeight: "100vh",
    overflowX: "hidden",
  },
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  "#root": {
    height: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flexGrow: 1,
  },
  a: {
    display: "block",
    color: "inherit",
    textDecoration: "none",
  },
  "ul, li": {
    listStyle: "none",
  },
};
