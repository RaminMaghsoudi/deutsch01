"use client";

import { Box, Divider } from "@mui/material";
import React, { useActionState, useEffect } from "react";
import classess from "./Ubens.module.css";
import { GiChestnutLeaf } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { Insert } from "@/actions";
import Menus from "../menus/Menus";
import { useContexts } from "@/app/Context";

const Ubens = ({ grouped }) => {
  const {
    Title,
    setTitle,
    EN,
    setEN,
    FA,
    setFA,
    Target,
    setTarget,
    showAddItems,
    setShowAddItems,
    contextMenu,
    setContextMenu,
  } = useContexts();

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
  const handleClose = (e, selecteditems) => {
    setContextMenu(null);
    setShowAddItems("IN");
    if (e === "ADD") {
      setTitle(selecteditems.Title);
      setEN(selecteditems.EN);
      setFA(selecteditems.FA);
    }
  };

  useEffect(() => {
    if (state.success) {
      setTitle("");
      setEN("");
      setFA("");
      setTarget("");
      setShowAddItems("OUT");
    }
  }, [state.success, setTarget, setEN, setFA, setTitle, setShowAddItems]);
  console.log(grouped);

  return (
    <Box className={classess.Wrapper}>
      {grouped.length === 0 ? (
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
        grouped.map((FAM, ID) => (
          <Box
            key={ID}
            className={classess.Ubens}
            onContextMenu={(e) => handleContextMenu(e)}
          >
            
            {/* <Box className={classess.UbensTitle}>
              <GiChestnutLeaf />
              <span className={classess.UT_Title}>{FAM.Title}</span>
              <span className={classess.UT_EN}>{FAM.EN} :</span>
            </Box>
            <Box className={classess.UbensDesc}>{FAM.items.Target}</Box>
            <Box className={classess.UbensTip}>{FAM.Tip}</Box>
            <Box className={classess.UbensRule}>{FAM.Rule}</Box>  */}
            <Menus
              contextMenu={contextMenu}
              setContextMenu={setContextMenu}
              handleClose={handleClose}
              FAM={FAM}
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
              name="Target"
              value={Target}
              onChange={(e) => setTarget(e.target.value)}
              className={classess.TitleTextarea}
              placeholder="Beschreibung Hinzufügen"
            />
            <input type="hidden" name="Type" value="DESCRIPTION" />
            {/* <textarea
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
            /> */}
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
