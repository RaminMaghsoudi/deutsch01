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
import { PiCardsThree } from "react-icons/pi";
import { BiChevronRight } from "react-icons/bi";
import { LuCircleGauge } from "react-icons/lu";
import BodiDesc from "./BodiDesc";
import BodiRule from "./BodiRule";

const Bodi = ({ grouped, fetchTD, fetchSTD, fetchAllRule }) => {
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
    SelectMainMenu,
    ArrayOfMainMenu,
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
      {SelectMainMenu === ArrayOfMainMenu[0] ? (
        <BodiDesc
          grouped={grouped}
          RemoveEditable={RemoveEditable}
          setSelectItems={setSelectItems}
          Editable={Editable}
          SelectItems={SelectItems}
          handleContextMenu={handleContextMenu}
        />
      ) : SelectMainMenu === ArrayOfMainMenu[1] ? (
        <BodiRule />
      ) : null}
    </Box>
  );
};

export default Bodi;
