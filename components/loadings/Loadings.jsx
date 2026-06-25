import { Box } from "@mui/material";
import React from "react";
import classess from "./Loadings.module.css";

const Loadings = () => {
  return (
    <Box className={classess.Loadings}>
      <Box className={classess.Add}>Laden ...</Box>
      <Box className={classess.Bodi}>Laden ...</Box>
    </Box>
  );
};

export default Loadings;
