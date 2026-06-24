"use client";

import { Box, Divider, Menu, MenuItem } from "@mui/material";
import React, { Fragment, useActionState } from "react";
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
import { Delete, DeleteTarget } from "@/actions";
import { useRouter } from "next/navigation";
import { SiAnydesk } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";

const Bodi = ({ grouped, groupedTD, fetchSTD }) => {
  const router = useRouter();
  const {
    SelectItems,
    setSelectItems,
    contextMenu,
    setContextMenu,
    setTitle,
    setEN,
    setFA,
    setTarget,
    setSelect,
    setEditable,
    setShowMessage,
    setInsertTD,
  } = useContexts();

  const handleContextMenu = (event, GM, status) => {
    event.preventDefault();
    setContextMenu({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
      content: GM,
      status: status,
    });
    setShowMessage(false);
  };
  const handleClose = () => {
    setContextMenu(null);
  };
  const handleDelete = async (title) => {
    try {
      const result = await Delete(title);
      if (result.success) router.refresh();
    } catch (err) {
      console.log(err);
    }
    handleClose();
  };
  const handleEdit = async (content) => {
    if (contextMenu.status === "T") {
      setEditable({ status: contextMenu.status, content: content.Title });
      setTitle(content.Title);
      setEN(content.EN);
      setFA(content.FA);
      setSelect("Titel erstellen");
    }
    if (
      contextMenu.status === "D" ||
      contextMenu.status === "R" ||
      contextMenu.status === "P" ||
      contextMenu.status === "B" ||
      contextMenu.status === "C"
    ) {
      setEditable({ status: contextMenu.status, id: content.id });
      setTarget(content.Target);
      setSelect(
        contextMenu.status === "D"
          ? "Beschreibung hinzufügen"
          : contextMenu.status === "R"
            ? "Regel hinzufügen"
            : contextMenu.status === "P"
              ? "Trinkgeld hinzufügen"
              : contextMenu.status === "B" || contextMenu.status === "C"
                ? "TD-Tabelle hinzufügen"
                : null,
      );
    }
    handleClose();
  };
  const handleDeleteTarget = async (id) => {
    try {
      const result = await DeleteTarget(id);
      if (result.success) router.refresh();
    } catch (err) {
      console.log(err);
    }
    handleClose();
  };
  const handleTD = (content) => {
    setInsertTD({ content: content, status: contextMenu.status });
    setSelect("TD-Tabelle hinzufügen");
    handleClose();
  };

  return (
    <Box className={classess.Bodi}>
      {grouped.map((GM, ID) => (
        <Box
          key={ID}
          className={classess.Items}
          onClick={() => setSelectItems(SelectItems === null ? GM : null)}
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
            <div key={Index}>
              <Box
                className={
                  GMI.Type === "DESCRIPTION"
                    ? classess.UbensDescription
                    : GMI.Type === "RULE"
                      ? classess.UbensRule
                      : GMI.Type === "TIP"
                        ? classess.UbensTip
                        : GMI.Type === "TABLE"
                          ? classess.UbensTable
                          : ""
                }
                onContextMenu={(e) =>
                  handleContextMenu(
                    e,
                    GMI,
                    GMI.Type === "RULE"
                      ? "R"
                      : GMI.Type === "TIP"
                        ? "P"
                        : GMI.Type === "DESCRIPTION"
                          ? "D"
                          : "B",
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
                {GMI.Type !== null &&
                (GMI.Type.split("-")[0] === "TD" ||
                  GMI.Type.split("-")[0] === "STD")
                  ? null
                  : GMI.Target}
              </Box>
              <Box className={classess.TDS}>
                {groupedTD[ID].td.length !== 0
                  ? groupedTD[ID].td.map((GTT, Counter) =>
                      Number(GTT.Type.split("-")[1]) === GMI.id ? (
                        <div key={Counter} style={{ marginBottom: "25px" }}>
                          <Box
                            className={classess.TD}
                            onContextMenu={(e) =>
                              handleContextMenu(e, GTT, "C")
                            }
                          >
                            {GTT.Target}
                          </Box>
                          {fetchSTD.map((FSTD, Loops) =>
                            Number(FSTD.Type.split("-")[1]) === GTT.id ? (
                              <Box key={Loops} className={classess.STD}>
                                {FSTD.Target}
                              </Box>
                            ) : null,
                          )}
                        </div>
                      ) : null,
                    )
                  : null}
              </Box>
            </div>
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
          onClick={() => handleEdit(contextMenu.content)}
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
        <MenuItem
          sx={{
            fontFamily: "CL",
            display:
              contextMenu !== null && contextMenu.status === "T"
                ? "flex"
                : "none",
          }}
          onClick={() => handleDelete(contextMenu.content.Title)}
        >
          <AiOutlineDelete />
          <span className={classess.Icon}>Titel Löschen</span>
        </MenuItem>
        {/* HHHHHHHHHHHHHHHHHHHHHHHHH Regel */}
        <MenuItem
          sx={{
            fontFamily: "CL",
            display:
              contextMenu !== null && contextMenu.status === "R"
                ? "flex"
                : "none",
          }}
          onClick={() => handleEdit(contextMenu.content)}
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
          onClick={() => handleDeleteTarget(contextMenu.content.id)}
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
          onClick={() => handleEdit(contextMenu.content)}
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
          onClick={() => handleDeleteTarget(contextMenu.content.id)}
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
          onClick={() => handleEdit(contextMenu.content)}
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
          onClick={() => handleDeleteTarget(contextMenu.content.id)}
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
        {/* HHHHHHHHHHHHHHHHHHHHHHHHH TABLE */}
        <MenuItem
          sx={{
            fontFamily: "CL",
            display:
              contextMenu !== null && contextMenu.status === "B"
                ? "flex"
                : "none",
          }}
          onClick={() => handleTD(contextMenu.content)}
        >
          <SiAntdesign style={{ fontSize: "1.1rem", marginTop: "2px" }} />
          <span className={classess.Icon}>TD-Titel einfügen</span>
        </MenuItem>
        <Divider
          sx={{
            display:
              contextMenu !== null && contextMenu.status === "B"
                ? "flex"
                : "none",
          }}
        />
        <MenuItem
          sx={{
            fontFamily: "CL",
            display:
              contextMenu !== null && contextMenu.status === "B"
                ? "flex"
                : "none",
          }}
          onClick={() => handleEdit(contextMenu.content)}
        >
          <DiNetbeans style={{ fontSize: "1.1rem", marginTop: "2px" }} />
          <span className={classess.Icon}>TD-Titel Bearbeiten</span>
        </MenuItem>
        <MenuItem
          sx={{
            fontFamily: "CL",
            display:
              contextMenu !== null && contextMenu.status === "B"
                ? "flex"
                : "none",
          }}
          onClick={() => handleDeleteTarget(contextMenu.content.id)}
        >
          <AiOutlineDelete style={{ fontSize: "1.1rem", marginTop: "2px" }} />
          <span className={classess.Icon}>Löschen TD-Titel</span>
        </MenuItem>
        <MenuItem
          sx={{
            fontFamily: "CL",
            display:
              contextMenu !== null && contextMenu.status === "B"
                ? "flex"
                : "none",
          }}
        >
          <SiRemovedotbg style={{ fontSize: "1.1rem", marginTop: "2px" }} />
          <span className={classess.Icon}>Entfernen TD-Titel</span>
        </MenuItem>
        {/* HHHHHHHHHHHHHHHHHHHHHHHHH TDS */}
        <MenuItem
          sx={{
            fontFamily: "CL",
            display:
              contextMenu !== null && contextMenu.status === "C"
                ? "flex"
                : "none",
          }}
          onClick={() => handleTD(contextMenu.content)}
        >
          <SiAntdesign style={{ fontSize: "1.1rem", marginTop: "2px" }} />
          <span className={classess.Icon}>TD-Untertitel einfügen</span>
        </MenuItem>
        <Divider
          sx={{
            display:
              contextMenu !== null && contextMenu.status === "C"
                ? "flex"
                : "none",
          }}
        />
        <MenuItem
          sx={{
            fontFamily: "CL",
            display:
              contextMenu !== null && contextMenu.status === "C"
                ? "flex"
                : "none",
          }}
          onClick={() => handleEdit(contextMenu.content)}
        >
          <DiNetbeans style={{ fontSize: "1.1rem", marginTop: "2px" }} />
          <span className={classess.Icon}>TD-Untertitel Bearbeiten</span>
        </MenuItem>
        <MenuItem
          sx={{
            fontFamily: "CL",
            display:
              contextMenu !== null && contextMenu.status === "C"
                ? "flex"
                : "none",
          }}
          onClick={() => handleDeleteTarget(contextMenu.content.id)}
        >
          <AiOutlineDelete style={{ fontSize: "1.1rem", marginTop: "2px" }} />
          <span className={classess.Icon}>Löschen TD-Untertitel</span>
        </MenuItem>
        <MenuItem
          sx={{
            fontFamily: "CL",
            display:
              contextMenu !== null && contextMenu.status === "C"
                ? "flex"
                : "none",
          }}
        >
          <SiRemovedotbg style={{ fontSize: "1.1rem", marginTop: "2px" }} />
          <span className={classess.Icon}>Entfernen TD-Untertitel</span>
        </MenuItem>
      </Menu>
      <Box sx={{ minHeight: "100px" }}></Box>
    </Box>
  );
};

export default Bodi;
