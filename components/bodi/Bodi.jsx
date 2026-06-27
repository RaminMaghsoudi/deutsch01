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
import { LuCoffee } from "react-icons/lu";
import Image from "next/image";
import U from "../../public/U.jpg";

const Bodi = ({ grouped, fetchTD, fetchSTD }) => {
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
    setTable,
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
    if (content.status === "TDS") {
      setEditable(content);
      setTable(content.content.Target);
      setSelectMenu(ArrayOfMenu[5]);
      setSelectItems(null);
    }
    if (content.status === "CTD") {
      setEditable(content);
      setTable(content.content.Target);
      setSelectMenu(ArrayOfMenu[5]);
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
    setTable("");
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
  const handleTD = (content) => {
    setSelectMenu(ArrayOfMenu[6]);
    setSelectItems(content.content);
    setContextMenu(null);
  };
  const handleSTD = (content) => {
    setSelectMenu(ArrayOfMenu[7]);
    setSelectItems(content.content);
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
            <Box
              className={classess.CardTitle}
              onContextMenu={(e) => handleContextMenu(e, GM, "CT")}
            >
              <Image src={U} alt="line" width={30} height={30} />
              <span className={classess.CT}>{GM.Title}</span>
              {GM.EN.length === 0 ? null : (
                <span className={classess.EN}>{GM.EN}</span>
              )}
            </Box>
            <Box className={classess.CardInfo}>
              {GM.items.map((GMI, Index) => (
                <div key={Index}>
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
                              : GMI.Type === "TABLE"
                                ? "TDS"
                                : null,
                      )
                    }
                  >
                    {GMI.Type === "RULE" ? (
                      <Box className={classess.Icons}>
                        <BsCheck2All size={18} />
                      </Box>
                    ) : GMI.Type === "TIP" ? (
                      <Box className={classess.Icons}>
                        <LuCoffee />
                      </Box>
                    ) : null}
                    {GMI.Type?.startsWith("TD") || GMI.Type?.startsWith("STD")
                      ? null
                      : GMI.Target}
                  </Box>
                  <Box className={classess.TDS}>
                    {fetchTD.map((FTD, INDEX) =>
                      GMI.Type?.startsWith("TABLE") &&
                      GMI.Type !== null &&
                      Number(FTD.Type.split("-")[1]) === GMI.id ? (
                        <Box
                          key={INDEX}
                          className={classess.TD}
                          onContextMenu={(e) =>
                            handleContextMenu(e, FTD, "CTD")
                          }
                        >
                          {FTD.Target}
                        </Box>
                      ) : null,
                    )}
                  </Box>
                  <Box className={classess.STDS}>{fetchTD.map((FTD, INDEX) => (
                    {FTD.Type?.startsWith("TD")&& }
                  ))}</Box>
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
          </Box>
        ))
      )}
      <Box sx={{ width: "100%", minHeight: "100px", flexShrink: "0" }}></Box>
    </Box>
  );
};

export default Bodi;
