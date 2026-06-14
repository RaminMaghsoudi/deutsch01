"use client";

import { Box, Divider } from "@mui/material";
import React, { useActionState, useState } from "react";
import classess from "./Ubens.module.css";
import { GiChestnutLeaf } from "react-icons/gi";
import Menus from "../menus/Menus";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { Insert } from "@/actions";

const Ubens = ({ fetchAll }) => {
  const [contextMenu, setContextMenu] = useState(null);
  const [showAddItems, setShowAddItems] = useState("");
  const [Title, setTitle] = useState("");
  const [EN, setEN] = useState("");
  const [FA, setFA] = useState("");
  const [Desc, setDesc] = useState("");

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };
  const handleClose = () => {
    setContextMenu(null);
    setShowAddItems("IN");
  };

  const [state, formAction] = useActionState(Insert, {
    message: null,
  });

  return (
    <Box className="Wrapper">
      <Box
        className={
          showAddItems === "IN"
            ? `${classess.AddItems} ${classess.AddItemsAnimation1}`
            : showAddItems === "OUT"
              ? `${classess.AddItems} ${classess.AddItemsAnimation2}`
              : classess.AddItems
        }
      >
        <form action={formAction}>
          <Box className={classess.Header}>
            <IoIosArrowBack
              className={classess.IoIosArrowBack}
              onClick={() => setShowAddItems("OUT")}
            />
            <button type="submit" className={classess.IoMdCheckmark}>
              <IoMdCheckmark />
            </button>
          </Box>
          <Box className={classess.subHeader}>
            <GiChestnutLeaf className={classess.GiChestnutLeaf} />
            <span className={classess.Title}>Titel erstellen</span>
            <Divider className={classess.Divider1} />
            <Divider className={classess.Divider2} />
            <input
              type="text"
              name="Title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              className={classess.TitleInput}
              placeholder="Titel Hinzufügen"
            />
            <input
              type="text"
              name="EN"
              value={EN}
              onChange={(e) => setEN(e.target.value)}
              className={`${classess.TitleInput} ${classess.TI}`}
              placeholder="Bedeutung auf Englisch"
            />
            <input
              type="text"
              name="FA"
              value={FA}
              onChange={(e) => setFA(e.target.value)}
              className={`${classess.TitleInput} ${classess.TI}`}
              placeholder="Bedeutung auf Persisch"
            />
            <textarea
              type="text"
              name="Desc"
              value={Desc}
              onChange={(e) => setDesc(e.target.value)}
              className={classess.TitleTextarea}
              placeholder="Beschreibung Hinzufügen"
            />
            {state.message && (
              <Box
                className={state.success ? classess.Success : classess.Error}
              >
                {state.message}
              </Box>
            )}
          </Box>
        </form>
      </Box>
      <Box
        className={
          fetchAll.length === 0
            ? classess.Wrapper
            : `${classess.Wrapper} ${classess.WrapperAnimation}`
        }
      >
        <GiChestnutLeaf className={classess.GiChestnutLeaf2} />
        <span className={classess.Title}>Der Erfolg gehört mir.</span>
        <Divider className={classess.Divider3} />
        <Divider className={classess.Divider4} />
        <span className={classess.Add} onClick={() => setShowAddItems("IN")}>
          Hinzufügen
        </span>
      </Box>
      <Box
        className={
          fetchAll.length === 0
            ? classess.Ubens
            : `${classess.Ubens} ${classess.UbensAnimation}`
        }
        onContextMenu={(e) => handleContextMenu(e)}
      >
        <Box className={classess.UbensTitle}>
          <GiChestnutLeaf />
          <span className={classess.UT_Title}></span>
        </Box>
        <Menus
          contextMenu={contextMenu}
          setContextMenu={setContextMenu}
          handleClose={handleClose}
        />
      </Box>
    </Box>
  );
};

export default Ubens;
