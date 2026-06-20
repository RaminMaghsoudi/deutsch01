"use client";

import { Box } from "@mui/material";
import React from "react";
import classess from "./Wrapper.module.css";
import { GiButterfly } from "react-icons/gi";
import BTN from "../btn/BTN";

const Wrapper = () => {
  return (
    <Box className={classess.Wrapper}>
      <GiButterfly className={classess.GiButterfly} />
      <span className={classess.Der}>Der Erfolg gehört mir.</span>
      <span className={classess.Nutzen}>
        Nutzen Sie das Menü auf der linken Seite, um fortzufahren.
      </span>
    </Box>
  );
};

export default Wrapper;
