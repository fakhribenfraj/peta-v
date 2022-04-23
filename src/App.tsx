import { FC } from "react";
import { Grid, Link, Slider, styled } from "@mui/material";

import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const App: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Grid
        container
        alignContent="flex-start"
        sx={{
          pt: { xs: "6.5rem", lg: "6.7rem", xl: "7.5rem" },
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <Outlet />
      </Grid> */}
    </>
  );
};

export default App;
