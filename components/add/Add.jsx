"use client";

import { Box } from "@mui/material";
import React from "react";
import classess from "./Add.module.css";
import HeaderAdd from "../headeradd/HeaderAdd";
import Form from "../form/Form";

const Add = ({ grouped }) => {
  return (
    <Box className={classess.Add}>
      <HeaderAdd />
      <Form grouped={grouped} />
    </Box>
  );
};

export default Add;
