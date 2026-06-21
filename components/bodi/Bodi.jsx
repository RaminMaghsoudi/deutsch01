"use client";

import { Box, Divider, Menu, MenuItem } from "@mui/material";
import React, { useActionState } from "react";
import classess from "./Bodi.module.css";
import { GiChestnutLeaf } from "react-icons/gi";
import { PiButterflyLight } from "react-icons/pi";
import { SlUmbrella } from "react-icons/sl";
import { FaRegGrinBeam } from "react-icons/fa";
import { useContexts } from "@/app/Context";
import { GrMultiple } from "react-icons/gr";
import { TiPlaneOutline } from "react-icons/ti";
import { BsCheck2All } from "react-icons/bs";
import { BsUiChecksGrid } from "react-icons/bs";
import { BsShieldCheck } from "react-icons/bs";
import { BiMessageSquareCheck } from "react-icons/bi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { PiShieldCheckLight } from "react-icons/pi";
import { PiSealCheckThin } from "react-icons/pi";
import { SiReaddotcv } from "react-icons/si";
import { RiFunctionAddLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import { DiNetbeans } from "react-icons/di";
import { SiRemovedotbg } from "react-icons/si";
import { Delete } from "@/actions";

const Bodi = ({ grouped }) => {
  const { SelectItems, setSelectItems, contextMenu, setContextMenu } =
    useContexts();

  const handleContextMenu = (event, GM, status) => {
    event.preventDefault();
    setContextMenu({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
      content: GM,
      status: status,
    });
  };
  const handleClose = () => {
    setContextMenu(null);
  };

  const [state, formAction] = useActionState(Delete, {
    success: false,
    message: null,
    timestamp: null,
  });

  return (
    <Box className={classess.Bodi}>
      {grouped.map((GM, ID) => (
        <Box
          key={ID}
          className={classess.Items}
          onClick={() => setSelectItems(GM)}
          sx={{
            backgroundColor:
              SelectItems !== null
                ? SelectItems.Title.trim().toLowerCase() ===
                  GM.Title.trim().toLowerCase()
                  ? "rgba(150, 150, 150, 0.1)"
                  : ""
                : "",
            border:
              SelectItems !== null
                ? SelectItems.Title.trim().toLowerCase() ===
                  GM.Title.trim().toLowerCase()
                  ? "1px dashed rgba(0, 0, 0)"
                  : "1px dashed rgba(100, 100, 100, 0.4)"
                : "1px dashed rgba(100, 100, 100, 0.4)",
          }}
        >
          <Box
            className={classess.UbensTitle}
            onContextMenu={(e) => handleContextMenu(e, GM, "T")}
          >
            <GiChestnutLeaf />
            <span className={classess.UT_Title}>{GM.Title}</span>
            <span className={classess.UT_EN}>{GM.EN} :</span>
          </Box>
          {GM.items.map((GMI, Index) => (
            <Box
              key={Index}
              className={
                GMI.Type === "DESCRIPTION"
                  ? classess.UbensDescription
                  : GMI.Type === "RULE"
                    ? classess.UbensRule
                    : GMI.Type === "TIP"
                      ? classess.UbensTip
                      : ""
              }
              onContextMenu={(e) =>
                handleContextMenu(
                  e,
                  GM,
                  GMI.Type === "RULE" ? "R" : GMI.Type === "TIP" ? "P" : "D",
                )
              }
            >
              {GMI.Type === "RULE" ? (
                <Box className={classess.Icons}>
                  <BsCheck2All />
                </Box>
              ) : GMI.Type === "TIP" ? (
                <Box className={classess.Icons}>
                  <PiSealCheckThin />
                </Box>
              ) : null}
              {GMI.Target}
            </Box>
          ))}
        </Box>
      ))}
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
              contextMenu !== null && contextMenu.status === "T"
                ? "flex"
                : "none",
          }}
        >
          <SiReaddotcv />
          <span className={classess.Icon}>Titel bearbeiten</span>
        </MenuItem>
        <Divider
          sx={{
            display:
              contextMenu !== null && contextMenu.status === "T"
                ? "flex"
                : "none",
          }}
        />
        <form action={formAction}>
          <MenuItem
            sx={{
              fontFamily: "CL",
              display:
                contextMenu !== null && contextMenu.status === "T"
                  ? "flex"
                  : "none",
            }}
          >
            <AiOutlineDelete />
            <span className={classess.Icon}>Titel Löschen</span>
          </MenuItem>
        </form>
        {/* HHHHHHHHHHHHHHHHHHHHHHHHH Regel */}
        <MenuItem
          sx={{
            fontFamily: "CL",
            display:
              contextMenu !== null && contextMenu.status === "R"
                ? "flex"
                : "none",
          }}
        >
          <DiNetbeans style={{ fontSize: "1.1rem", marginTop: "2px" }} />
          <span className={classess.Icon}>Regel bearbeiten</span>
        </MenuItem>
        <MenuItem
          sx={{
            fontFamily: "CL",
            display:
              contextMenu !== null && contextMenu.status === "R"
                ? "flex"
                : "none",
          }}
        >
          <AiOutlineDelete style={{ fontSize: "1.1rem", marginTop: "2px" }} />
          <span className={classess.Icon}>Löschen Regel</span>
        </MenuItem>
        <MenuItem
          sx={{
            fontFamily: "CL",
            display:
              contextMenu !== null && contextMenu.status === "R"
                ? "flex"
                : "none",
          }}
        >
          <SiRemovedotbg style={{ fontSize: "1.1rem", marginTop: "2px" }} />
          <span className={classess.Icon}>Entfernen Regel</span>
        </MenuItem>
        {/* HHHHHHHHHHHHHHHHHHHHHHHHH Tip */}
        <MenuItem
          sx={{
            fontFamily: "CL",
            display:
              contextMenu !== null && contextMenu.status === "P"
                ? "flex"
                : "none",
          }}
        >
          <DiNetbeans style={{ fontSize: "1.1rem", marginTop: "2px" }} />
          <span className={classess.Icon}>Trinkgeld Bearbeiten</span>
        </MenuItem>
        <MenuItem
          sx={{
            fontFamily: "CL",
            display:
              contextMenu !== null && contextMenu.status === "P"
                ? "flex"
                : "none",
          }}
        >
          <AiOutlineDelete style={{ fontSize: "1.1rem", marginTop: "2px" }} />
          <span className={classess.Icon}>Löschen Trinkgeld</span>
        </MenuItem>
        <MenuItem
          sx={{
            fontFamily: "CL",
            display:
              contextMenu !== null && contextMenu.status === "P"
                ? "flex"
                : "none",
          }}
        >
          <SiRemovedotbg style={{ fontSize: "1.1rem", marginTop: "2px" }} />
          <span className={classess.Icon}>Entfernen Trinkgeld</span>
        </MenuItem>
        {/* HHHHHHHHHHHHHHHHHHHHHHHHH Beschreibung */}
        <MenuItem
          sx={{
            fontFamily: "CL",
            display:
              contextMenu !== null && contextMenu.status === "D"
                ? "flex"
                : "none",
          }}
        >
          <DiNetbeans style={{ fontSize: "1.1rem", marginTop: "2px" }} />
          <span className={classess.Icon}>Beschreibung Bearbeiten</span>
        </MenuItem>
        <MenuItem
          sx={{
            fontFamily: "CL",
            display:
              contextMenu !== null && contextMenu.status === "D"
                ? "flex"
                : "none",
          }}
        >
          <AiOutlineDelete style={{ fontSize: "1.1rem", marginTop: "2px" }} />
          <span className={classess.Icon}>Löschen Beschreibung</span>
        </MenuItem>
        <MenuItem
          sx={{
            fontFamily: "CL",
            display:
              contextMenu !== null && contextMenu.status === "D"
                ? "flex"
                : "none",
          }}
        >
          <SiRemovedotbg style={{ fontSize: "1.1rem", marginTop: "2px" }} />
          <span className={classess.Icon}>Entfernen Beschreibung</span>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Bodi;
