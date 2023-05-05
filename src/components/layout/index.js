import { Box } from "@mui/material";
import React from "react";
import NavBar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      {children}
    </Box>
  );
};

export default Layout;
