"use client";

import { Box, Divider, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import classess from "./M1.module.css";
import { SiReaddotcv } from "react-icons/si";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";
import { RiTranslate2 } from "react-icons/ri";
import { RiFunctionAddLine } from "react-icons/ri";
import { IoMdCloudOutline } from "react-icons/io";
import { SiSaturn } from "react-icons/si";
import { PiLampPendant } from "react-icons/pi";

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
        sx={{
          fontFamily: "CL",
          display:
            contextMenu === null
              ? null
              : contextMenu.Type === "Descrition"
                ? "flex"
                : "none",
        }}
        onClick={() => handleClose("ADD", FAM)}
      >
        <SiReaddotcv />
        <span className={classess.Icon}>Beschreibung bearbeiten</span>
      </MenuItem>
      <MenuItem
        sx={{
          fontFamily: "CL",
          display:
            contextMenu === null
              ? null
              : contextMenu.Type === "Descrition"
                ? "flex"
                : "none",
        }}
      >
        <AiOutlineDelete />
        <span className={classess.Icon}>Beschreibung löschen</span>
      </MenuItem>
      <MenuItem
        sx={{
          fontFamily: "CL",
          display:
            contextMenu === null
              ? null
              : contextMenu.Type === "Title"
                ? "flex"
                : "none",
        }}
      >
        <SiReaddotcv />
        <span className={classess.Icon}>Titel bearbeiten</span>
      </MenuItem>
      <Divider
        sx={{
          fontFamily: "CL",
          display:
            contextMenu === null
              ? null
              : contextMenu.Type === "Title"
                ? "flex"
                : "none",
        }}
      />
      <MenuItem
        sx={{
          fontFamily: "CL",
          display:
            contextMenu === null
              ? null
              : contextMenu.Type === "Title"
                ? "flex"
                : "none",
        }}
      >
        <RiFunctionAddLine />
        <span className={classess.Icon}>Beschreibung hinzufügen</span>
      </MenuItem>
      <MenuItem
        sx={{
          fontFamily: "CL",
          display:
            contextMenu === null
              ? null
              : contextMenu.Type === "Title"
                ? "flex"
                : "none",
        }}
      >
        <IoMdCloudOutline />
        <span className={classess.Icon}>Regel hinzufügen</span>
      </MenuItem>
      <MenuItem
        sx={{
          fontFamily: "CL",
          display:
            contextMenu === null
              ? null
              : contextMenu.Type === "Title"
                ? "flex"
                : "none",
        }}
      >
        <SiSaturn />
        <span className={classess.Icon}>Tipp hinzufügen</span>
      </MenuItem>
      <MenuItem
        sx={{
          fontFamily: "CL",
          display:
            contextMenu === null
              ? null
              : contextMenu.Type === "Title"
                ? "flex"
                : "none",
        }}
      >
        <PiLampPendant />
        <span className={classess.Icon}>Beispiel hinzufügen</span>
      </MenuItem>

      <Divider
        sx={{
          fontFamily: "CL",
          display:
            contextMenu === null
              ? null
              : contextMenu.Type === "Title"
                ? "flex"
                : "none",
        }}
      />
      <MenuItem
        sx={{
          fontFamily: "CL",
          display:
            contextMenu === null
              ? null
              : contextMenu.Type === "Title"
                ? "flex"
                : "none",
        }}
      >
        <AiOutlineDelete />
        <span className={classess.Icon}>Titel löschen</span>
      </MenuItem>
    </Menu>
  );
};

export default Menus;
