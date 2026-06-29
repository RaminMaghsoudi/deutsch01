import { Box } from "@mui/material";
import React from "react";
import classess from "./Form.module.css";

const VI = ({ title, name, value, Change }) => {
  return (
    <Box className={classess.VI}>
      <Box className={classess.VIT}>{title}</Box>
      <input
        type="text"
        name={name}
        value={value}
        onChange={Change}
        className={classess.VII}
      />
    </Box>
  );
};

export default VI;
