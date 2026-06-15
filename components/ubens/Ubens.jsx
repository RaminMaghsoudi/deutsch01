"use client";

import { Box, Divider } from "@mui/material";
import React, { useActionState, useEffect, useState } from "react";
import classess from "./Ubens.module.css";
import { GiChestnutLeaf } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { Insert } from "@/actions";
import Menus from "../menus/Menus";

const Ubens = ({ fetchAll }) => {
  const [Title, setTitle] = useState("");
  const [EN, setEN] = useState("");
  const [FA, setFA] = useState("");
  const [Desc, setDesc] = useState("");
  const [Tip, setTip] = useState("");
  const [Rule, setRule] = useState("");
  const [Example, setExample] = useState("");
  const [showAddItems, setShowAddItems] = useState("");
  const [contextMenu, setContextMenu] = useState(null);

  const [state, formAction] = useActionState(Insert, {
    message: null,
  });
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
  useEffect(() => {
    if (state.success) {
      setDesc("");
      setTip("");
      setRule("");
      setExample("");
    }
  });

  return (
    <Box className={classess.Wrapper}>
      {fetchAll.length === 0 ? (
        <Box className={classess.WrapperStarter}>
          <GiChestnutLeaf className={classess.Leaf1} />
          <span className={classess.WS1}>Der Erfolg gehört mir.</span>
          <Divider className={classess.Divider1} />
          <Divider className={classess.Divider2} />
          <span className={classess.Add} onClick={() => setShowAddItems("IN")}>
            Hinzufügen
          </span>
        </Box>
      ) : (
        fetchAll.map((FAM, ID) => (
          <Box
            key={ID}
            className={classess.Ubens}
            onContextMenu={(e) => handleContextMenu(e)}
          >
            <Box className={classess.UbensTitle}>
              <GiChestnutLeaf />
              <span className={classess.UT_Title}>{FAM.Title}</span>
              <span className={classess.UT_EN}>{FAM.EN} :</span>
            </Box>
            <Box className={classess.UbensDesc}>{FAM.Desc}</Box>
            <Box className={classess.UbensTip}>{FAM.Tip}</Box>
            <Menus
              contextMenu={contextMenu}
              setContextMenu={setContextMenu}
              handleClose={handleClose}
            />
          </Box>
        ))
      )}
      <Box
        className={
          showAddItems === "IN"
            ? `${classess.AddItems} ${classess.Animation1}`
            : showAddItems === "OUT"
              ? `${classess.AddItems} ${classess.Animation2}`
              : classess.AddItems
        }
      >
        <form action={formAction}>
          <Box className={classess.Header}>
            <IoIosArrowBack
              className={classess.Back}
              onClick={() => setShowAddItems("OUT")}
            />
            <button type="submit" className={classess.Save}>
              <IoMdCheckmark />
            </button>
          </Box>
          <Box className={classess.subHeader}>
            <GiChestnutLeaf className={classess.Leaf2} />
            <span className={classess.AI1}>Titel erstellen</span>
            <Divider className={classess.Divider3} />
            <Divider className={classess.Divider4} />
          </Box>
          <Box className={classess.AIBodi}>
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
            <textarea
              type="text"
              name="Tip"
              value={Tip}
              onChange={(e) => setTip(e.target.value)}
              className={classess.TitleTextarea}
              placeholder="Trinkgeld hinzufügen"
            />
            <textarea
              type="text"
              name="Rule"
              value={Rule}
              onChange={(e) => setRule(e.target.value)}
              className={classess.TitleTextarea}
              placeholder="Regel hinzufügen"
            />
            <input
              type="text"
              name="Example"
              value={Example}
              onChange={(e) => setExample(e.target.value)}
              className={`${classess.TitleInput} ${classess.TI}`}
              placeholder="Beispiel hinzufügen"
            />
            {state.message && (
              <Box
                className={state.success ? classess.Success : classess.Error}
              >
                {state.message}
              </Box>
            )}
            <Box sx={{ marginTop: "50px" }}></Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Ubens;
