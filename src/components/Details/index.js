import { Box } from "@mui/material";
import React from "react";

const Details = () => {
  return (
    <Box sx={{ position: "sticky", top: 80 }}>
      <p>
        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
        lavishness by night and by day: a blazer in a linen blend shot with
        lurex for a shimmering surface that shines like a star in the sky. it
        has a straight fit with well defined shoulders and a shawl collar
        culminating in a button and has been flawlessly finished with three jet
        pockets with a sartorial feel. <br />
        <br />
        See the{" "}
        <Box
          component='a'
          href='#'
          sx={{ textDecoration: "none", fontWeight: 700, color: "GrayText" }}
        >
          EDITOR&apos;S NOTE
        </Box>{" "}
        <br />
        <br />
        Learn about the{" "}
        <Box
          component='a'
          href='#'
          sx={{ textDecoration: "none", fontWeight: 700, color: "GrayText" }}
        >
          DESIGNER
        </Box>
      </p>
    </Box>
  );
};

export default Details;
