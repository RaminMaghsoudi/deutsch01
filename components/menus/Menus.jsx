"use client";

import { Box, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import classess from "./Menus.module.css";
import { SiReaddotcv } from "react-icons/si";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";
import { RiTranslate2 } from "react-icons/ri";
import { RiFunctionAddLine } from "react-icons/ri";

const Menus = ({ contextMenu, handleClose, FAM }) => {
  return (
    <Menu
      open={contextMenu !== null}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={
        contextMenu !== null
          ? {
              top: contextMenu.mouseY + 50,
              left: contextMenu.mouseX,
            }
          : undefined
      }
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.2))",
            mt: -5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "& .MuiMenuItem-root.Mui-focusVisible": {
              backgroundColor: "transparent !important",
            },
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem
        sx={{ fontFamily: "CL" }}
        onClick={() => handleClose("ADD", FAM)}
      >
        <RiFunctionAddLine />
        <span className={classess.Icon}>Titel erstellen</span>
      </MenuItem>
      <MenuItem sx={{ fontFamily: "CL" }}>
        <SiReaddotcv />
        <span className={classess.Icon}>Titel bearbeiten</span>
      </MenuItem>
      <MenuItem sx={{ fontFamily: "CL" }}>
        <AiOutlineDelete />
        <span className={classess.Icon}>Titel löschen</span>
      </MenuItem>
    </Menu>
  );
};

export default Menus;
