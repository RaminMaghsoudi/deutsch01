"use client";

import { Box, ClickAwayListener, Divider } from "@mui/material";
import React from "react";
import classess from "./HeaderAdd.module.css";
import { GiButterfly } from "react-icons/gi";
import { useContexts } from "@/app/Context";
import { CgController } from "react-icons/cg";
import { PiUmbrellaLight } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import { RxLayers } from "react-icons/rx";
import { PiLampPendantLight } from "react-icons/pi";
import { IoMdLocate } from "react-icons/io";
import { LiaCertificateSolid } from "react-icons/lia";
import { BsTextParagraph } from "react-icons/bs";

const HeaderAdd = () => {
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
      <span className={classess.AI1} onClick={() => setShowSelectMenu(true)}>
        {SelectMenu}
      </span>
      {ShowSelectMenu ? (
        <ClickAwayListener onClickAway={() => setShowSelectMenu(false)}>
          <Box className={classess.AI2}>
            <Box
              value="Titel"
              className={`${classess.option} ${classess.option2}`}
              onClick={() => {
                setSelectMenu(ArrayOfMenu[0]);
                setShowSelectMenu(false);
              }}
            >
              <CgController style={{ marginRight: "10px", fontSize: "18px" }} />
              {ArrayOfMenu[0]}
            </Box>
            <Box
              value="Parageraph"
              className={`${classess.option} ${classess.option2}`}
              onClick={() => {
                setSelectMenu(ArrayOfMenu[8]);
                setShowSelectMenu(false);
              }}
            >
              <BsTextParagraph
                style={{ marginRight: "10px", fontSize: "18px" }}
              />
              {ArrayOfMenu[8]}
            </Box>
            <Box
              value="Desctiption"
              className={classess.option}
              onClick={() => {
                setSelectMenu(ArrayOfMenu[1]);
                setShowSelectMenu(false);
              }}
            >
              <PiLampPendantLight
                style={{ marginRight: "10px", fontSize: "18px" }}
              />
              {ArrayOfMenu[1]}
            </Box>
            <Box
              value="Rule"
              className={classess.option}
              onClick={() => {
                setSelectMenu(ArrayOfMenu[2]);
                setShowSelectMenu(false);
              }}
            >
              <PiUmbrellaLight
                style={{ marginRight: "10px", fontSize: "18px" }}
              />
              {ArrayOfMenu[2]}
            </Box>
            <Box
              value="Tip"
              className={`${classess.option}`}
              onClick={() => {
                setSelectMenu(ArrayOfMenu[3]);
                setShowSelectMenu(false);
              }}
            >
              <GoArrowUpRight
                style={{ marginRight: "10px", fontSize: "18px" }}
              />
              {ArrayOfMenu[3]}
            </Box>
            <Box
              value="Tip"
              className={`${classess.option} ${classess.option3}`}
              onClick={() => {
                setSelectMenu(ArrayOfMenu[4]);
                setShowSelectMenu(false);
              }}
            >
              <LiaCertificateSolid
                style={{ marginRight: "10px", fontSize: "18px" }}
              />
              {ArrayOfMenu[4]}
            </Box>
            <Box
              value="Tip"
              className={`${classess.option} ${classess.option3}`}
              onClick={() => {
                setSelectMenu(ArrayOfMenu[5]);
                setShowSelectMenu(false);
              }}
            >
              <RxLayers style={{ marginRight: "10px", fontSize: "18px" }} />
              {ArrayOfMenu[5]}
            </Box>
          </Box>
        </ClickAwayListener>
      ) : null}
      <Divider className={classess.Divider3} />
      <Divider className={classess.Divider4} />
    </Box>
  );
};

export default HeaderAdd;
