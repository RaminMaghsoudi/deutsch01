"use client";

import { Box, ClickAwayListener, Divider } from "@mui/material";
import React from "react";
import classess from "./HeaderAddVerb.module.css";
import { GiButterfly } from "react-icons/gi";
import { useContexts } from "@/app/Context";
import { CgController } from "react-icons/cg";
import { PiUmbrellaLight } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import { RxLayers } from "react-icons/rx";
import { PiLampPendantLight } from "react-icons/pi";
import { IoMdLocate } from "react-icons/io";
import { LiaCertificateSolid } from "react-icons/lia";

const HeaderAddVerb = () => {
  const {
    SelectMenu,
    setSelectMenu,
    ArrayOfMenu,
    ShowSelectMenu,
    setShowSelectMenu,
    SelectMainMenu,
  } = useContexts();

  return (
    <Box className={classess.HeaderAdd}>
      <GiButterfly className={classess.GiButterfly} />
      <span className={classess.AI0}>{SelectMainMenu}</span>

      <Divider className={classess.Divider3} />
      <Divider className={classess.Divider4} />
    </Box>
  );
};

export default HeaderAddVerb;
