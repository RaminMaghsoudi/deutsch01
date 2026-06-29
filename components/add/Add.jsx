"use client";

import { Box, ClickAwayListener } from "@mui/material";
import React from "react";
import classess from "./Add.module.css";
import HeaderAdd from "../headeradd/HeaderAdd";
import Form from "../form/Form";
import { RiMenu4Line } from "react-icons/ri";
import { useContexts } from "@/app/Context";
import { PiCloverBold } from "react-icons/pi";
import { RiShieldFlashLine } from "react-icons/ri";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import HeaderAddVerb from "../headeraddverb/HeaderAddVerb";
import FormVerb from "../form/FormVerb";

const Add = ({ grouped }) => {
  const {
    ShowMainMenu,
    setShowMainMenu,
    ArrayOfMainMenu,
    SelectMainMenu,
    setSelectMainMenu,
  } = useContexts();

  return (
    <Box className={classess.Add}>
      <Box className={classess.Menus} onClick={() => setShowMainMenu(true)}>
        <RiMenu4Line className={classess.RiMenu4Line} />
      </Box>
      {ShowMainMenu ? (
        <ClickAwayListener onClickAway={() => setShowMainMenu(false)}>
          <Box className={classess.AI2}>
            <Box
              value="Titel"
              className={`${classess.option} ${classess.option2}`}
              onClick={() => {
                setSelectMainMenu(ArrayOfMainMenu[0]);
                setShowMainMenu(false);
              }}
            >
              <RiShieldFlashLine
                style={{ marginRight: "10px", fontSize: "18px" }}
              />
              {ArrayOfMainMenu[0]}
            </Box>
            <Box
              value="Titel"
              className={`${classess.option} ${classess.option2}`}
              onClick={() => {
                setSelectMainMenu(ArrayOfMainMenu[1]);
                setShowMainMenu(false);
              }}
            >
              <PiCloverBold style={{ marginRight: "10px", fontSize: "18px" }} />
              {ArrayOfMainMenu[1]}
            </Box>
            <Box
              value="Titel"
              className={`${classess.option} ${classess.option2}`}
              onClick={() => {
                setSelectMainMenu(ArrayOfMainMenu[2]);
                setShowMainMenu(false);
              }}
            >
              <HiAdjustmentsVertical
                style={{ marginRight: "10px", fontSize: "18px" }}
              />
              {ArrayOfMainMenu[2]}
            </Box>
          </Box>
        </ClickAwayListener>
      ) : null}
      {SelectMainMenu === ArrayOfMainMenu[0] ? (
        <>
          <HeaderAdd />
          <Form grouped={grouped} />
        </>
      ) : SelectMainMenu === ArrayOfMainMenu[1] ? (
        <>
          <HeaderAddVerb />
          <FormVerb grouped={grouped} />
        </>
      ) : null}
    </Box>
  );
};

export default Add;
