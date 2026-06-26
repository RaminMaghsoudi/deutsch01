"use client";

import { Box, Card } from "@mui/material";
import React from "react";
import classess from "./Bodi.module.css";
import { GiButterfly } from "react-icons/gi";
import { useContexts } from "@/app/Context";
import Menus from "../menus/Menus";
import { useRouter } from "next/navigation";
import { Delete, DeleteTarget } from "@/actions";
import { BsCheck2All } from "react-icons/bs";
import { PiSealCheckThin } from "react-icons/pi";
import { TiPointOfInterest } from "react-icons/ti";

const Bodi = ({ grouped }) => {
  const router = useRouter();
  const {
    contextMenu,
    setContextMenu,
    setSelectMenu,
    ArrayOfMenu,
    setTitle,
    setEN,
    setFA,
    setEditable,
    Editable,
    SelectItems,
    setSelectItems,
    setShowMessage,
    setDesc,
    setRule,
    setTip,
  } = useContexts();

  const handleContextMenu = (event, content, status) => {
    event.preventDefault();
    setContextMenu({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
      content: content,
      status: status,
    });
  };
  const handleEdit = async (content) => {
    if (content.status === "CT") {
      setEditable(content);
      setTitle(content.content.Title);
      setEN(content.content.EN);
      setFA(content.content.FA);
      setSelectMenu(ArrayOfMenu[0]);
      setSelectItems(null);
    }
    if (content.status === "CD") {
      setEditable(content);
      setDesc(content.content.Target);
      setSelectMenu(ArrayOfMenu[1]);
      setSelectItems(null);
    }
    if (content.status === "CR") {
      setEditable(content);
      setRule(content.content.Target);
      setSelectMenu(ArrayOfMenu[2]);
      setSelectItems(null);
    }
    if (content.status === "CP") {
      setEditable(content);
      setTip(content.content.Target);
      setSelectMenu(ArrayOfMenu[3]);
      setSelectItems(null);
    }
    setContextMenu(null);
  };
  const RemoveEditable = () => {
    setEditable(null);
    setTitle("");
    setEN("");
    setFA("");
    setDesc("");
    setRule("");
    setTip("");
    setSelectItems(null);
    setShowMessage(false);
    setContextMenu(null);
  };
  const handleDelete = async (title) => {
    try {
      const result = await Delete(title);
      if (result.success) router.refresh();
    } catch (err) {
      console.log(err);
    }
    setContextMenu(null);
  };
  const handleDeleteTarget = async (id) => {
    try {
      const result = await DeleteTarget(id);
      if (result.success) {
        router.refresh();
        RemoveEditable();
      }
    } catch (err) {
      console.log(err);
    }
    setContextMenu(null);
  };

  return (
    <Box
      className={classess.Bodi}
      onClick={() => {
        RemoveEditable();
      }}
    >
      {grouped.length === 0 ? (
        <Box className={classess.Wrapper}>
          <GiButterfly className={classess.GiButterfly} />
          <span className={classess.Der}>Der Erfolg gehört mir.</span>
          <span className={classess.Nutzen}>
            Nutzen Sie das Menü auf der linken Seite, um fortzufahren.
          </span>
        </Box>
      ) : (
        grouped.map((GM, ID) => (
          <Card
            key={ID}
            className={classess.Card}
            onClick={(e) => {
              e.stopPropagation();
              RemoveEditable();
            }}
            onDoubleClick={() => setSelectItems(GM)}
            sx={{
              borderLeft: `2px solid
                ${
                  Editable !== null &&
                  Editable.content.Title.trim().toLowerCase() ===
                    GM.Title.trim().toLowerCase()
                    ? "red"
                    : SelectItems !== null &&
                        SelectItems.Title.trim().toLowerCase() ===
                          GM.Title.trim().toLowerCase()
                      ? "greenyellow"
                      : "white"
                }`,
              boxShadow: " 0rem 0rem 0.3rem gray",
            }}
          >
            <span
              className={classess.CardTitle}
              onContextMenu={(e) => handleContextMenu(e, GM, "CT")}
            >
              {GM.Title}
              {GM.EN.length === 0 ? null : (
                <span className={classess.CardEN}>: {GM.EN}</span>
              )}
            </span>

            {GM.items.map((GMI, Index) => (
              <Box key={Index} className={classess.Wrapper}>
                <Box
                  className={
                    GMI.Type === "DESCRIPTION"
                      ? classess.Description
                      : GMI.Type === "RULE"
                        ? classess.Rule
                        : GMI.Type === "TIP"
                          ? classess.Tip
                          : GMI.Type === "TABLE"
                            ? classess.Table
                            : ""
                  }
                  onContextMenu={(e) =>
                    handleContextMenu(
                      e,
                      GMI,
                      GMI.Type === "RULE"
                        ? "CR"
                        : GMI.Type === "TIP"
                          ? "CP"
                          : GMI.Type === "DESCRIPTION"
                            ? "CD"
                            : null,
                    )
                  }
                >
                  {/* {GMI.Type === "RULE" ? (
                    <Box className={classess.Icons}>
                      <BsCheck2All size={18} />
                    </Box>
                  ) : GMI.Type === "TIP" ? (
                    <Box className={classess.Icons}>
                      <TiPointOfInterest />
                    </Box>
                  ) : null} */}
                  {GMI.Target}
                </Box>
              </Box>
            ))}
            <Menus
              contextMenu={contextMenu}
              setContextMenu={setContextMenu}
              card={contextMenu !== null && contextMenu.status}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleDeleteTarget={handleDeleteTarget}
            />
          </Card>
        ))
      )}
      <Box sx={{ width: "100%", minHeight: "100px", flexShrink: "0" }}></Box>
    </Box>
  );
};

export default Bodi;
