"use client";

import { Box } from "@mui/material";
import React from "react";
import classess from "./Rule.module.css";

const Rule = () => {
  return (
    <Box
      className={classess.Bodi}
      onClick={() => {
        RemoveEditable();
      }}
    ></Box>
  );
};

export default Rule;
