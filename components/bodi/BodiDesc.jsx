"use client";

import { Box, Tooltip } from "@mui/material";
import React from "react";
import classess from "./Bodi.module.css";
import { GiButterfly } from "react-icons/gi";
import { BsWindows } from "react-icons/bs";
import { BsCheck2All } from "react-icons/bs";
import { LuCoffee } from "react-icons/lu";
import { LuCircleGauge } from "react-icons/lu";
import Menus from "../menus/Menus";

const BodiDesc = ({
  grouped,
  RemoveEditable,
  setSelectItems,
  Editable,
  SelectItems,
  handleContextMenu,
  fetchTD,
  fetchSTD,
  contextMenu,
  setContextMenu,
  handleEdit,
  handleDelete,
  handleDeleteTarget,
  handleTD,
  handleSTD,
}) => {
  return (
    <Box className={classess.BodiDesc}>
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
          <Box
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
            }}
          >
            <Tooltip
              title={GM.FA}
              arrow
              className={classess.CardHeader}
              slotProps={{
                tooltip: {
                  sx: {
                    fontSize: "1rem",
                    fontFamily: "CL",
                    lineHeight: 1.8,
                    letterSpacing: "0.2px",
                    bgcolor: "#1f2937",
                    color: "#fff",
                    px: 2,
                    py: 0.5,
                    borderRadius: "8px",
                    direction: "rtl",
                    textAlign: "right",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    maxWidth: 320,
                  },
                },
                arrow: {
                  sx: {
                    color: "#1f2937",
                  },
                },
              }}
              onContextMenu={(e) => handleContextMenu(e, GM, "CT")}
            >
              <BsWindows className={classess.BsWindows} />
              <div className={classess.CH}>
                <span className={classess.CardEN}>
                  {GM.EN.length === 0 ? null : GM.EN}
                </span>
                <span className={classess.CardTitle}>{GM.Title}</span>
              </div>
            </Tooltip>
            {GM.items.map((GMI, Index) => (
              <div
                key={Index}
                className={
                  GMI.Type === "EXAMPLE"
                    ? classess.EXAMPLE
                    : GMI.Type === "PARAGERAPH"
                      ? classess.PARAGERAPH
                      : classess.Div
                }
              >
                {GMI.Type === "PARAGERAPH" ? (
                  <Box className={classess.Line}></Box>
                ) : null}
                <Box
                  className={
                    GMI.Type === "DESCRIPTION"
                      ? classess.Description
                      : GMI.Type === "RULE"
                        ? classess.Rules
                        : GMI.Type === "TIP"
                          ? classess.Tips
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
                            : GMI.Type === "TABLE"
                              ? "TDS"
                              : null,
                    )
                  }
                >
                  {GMI.Type?.startsWith("TD") ||
                  GMI.Type?.startsWith("STD") ||
                  GMI.Type?.startsWith(
                    "EXAMPLECHILD",
                  ) ? null : GMI.Type?.startsWith("EXAMPLE") ? (
                    <>
                      <LuCircleGauge className={classess.GiCoffeeCup} />
                      {GMI.Target}
                      <span className={classess.MdArrowRightAlt}>→</span>
                      {GM.items[Index + 2]?.Target}
                    </>
                  ) : GMI.Type?.startsWith("TIP") ? (
                    <Box className={classess.Tip}>
                      <Box className={classess.Icons}>
                        <LuCoffee />
                      </Box>
                      {GMI.Target}
                    </Box>
                  ) : GMI.Type?.startsWith("RULE") ? (
                    <Box className={classess.Rule}>
                      <Box className={classess.Icons}>
                        <BsCheck2All size={18} />
                      </Box>
                      {GMI.Target}
                    </Box>
                  ) : (
                    GMI.Target
                  )}
                </Box>
                <Box className={classess.TDS}>
                  {fetchTD.map((FTD, INDEX) =>
                    GMI.Type?.startsWith("TABLE") &&
                    GMI.Type !== null &&
                    Number(FTD.Type.split("-")[1]) === GMI.id ? (
                      <Box key={INDEX}>
                        <Box
                          className={classess.TD}
                          onContextMenu={(e) =>
                            handleContextMenu(e, FTD, "CTD")
                          }
                        >
                          {FTD.Target}
                        </Box>
                        {fetchSTD.map((FSTD, INDEX) =>
                          Number(FSTD.Type.split("-")[1]) === FTD.id ? (
                            <Box key={INDEX} className={classess.STDS}>
                              {FSTD.Target}
                            </Box>
                          ) : null,
                        )}
                      </Box>
                    ) : null,
                  )}
                </Box>
              </div>
            ))}
            <Menus
              contextMenu={contextMenu}
              setContextMenu={setContextMenu}
              card={contextMenu !== null && contextMenu.status}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleDeleteTarget={handleDeleteTarget}
              handleTD={handleTD}
              handleSTD={handleSTD}
            />
          </Box>
        ))
      )}
      <Box sx={{ width: "100%", minHeight: "150px", flexShrink: "0" }}></Box>
    </Box>
  );
};

export default BodiDesc;
