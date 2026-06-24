import { Box } from "@mui/material";
import React from "react";
import classess from "./Add.module.css";
import HeaderAdd from "../headeradd/HeaderAdd";

const Add = () => {
  return (
    <Box className={classess.Add}>
      <HeaderAdd />
    </Box>
  );
};

export default Add;
