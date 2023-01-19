import React from "react";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import Contacts from "./component/Contacts/Contacts";
import MainLayout from "layout/MainLayout";
import { globalStyles, theme } from "./theme/theme";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Map from "./component/Map/Map";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        {/*<Home />*/}
        {/*<About />*/}
        <Contacts />
        <Map />
      </MainLayout>
      <GlobalStyles styles={globalStyles as any} />
    </ThemeProvider>
  );
}

export default App;
