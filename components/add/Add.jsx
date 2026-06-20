"use client";

import { Box, Divider } from "@mui/material";
import React from "react";
import classess from "./Add.module.css";
import { GiButterfly } from "react-icons/gi";
import { useContexts } from "@/app/Context";
import BTN from "../btn/BTN";
import { RiFunctionAddLine } from "react-icons/ri";
import { PiLampPendantLight } from "react-icons/pi";
import { GiFlexibleLamp } from "react-icons/gi";
import { FiDribbble } from "react-icons/fi";
import { FiUmbrella } from "react-icons/fi";

const Add = () => {
  const {
    Title,
    setTitle,
    EN,
    setEN,
    FA,
    setFA,
    Select,
    setSelect,
    ArrayOfMenu,
  } = useContexts();

  return (
    <Box className={classess.Add}>
      <Box className={classess.Header}>
        <GiButterfly className={classess.GiButterfly} />
        <span className={classess.AI1}>{Select}</span>
        <Box className={classess.AI2}>
          <Box
            value="Titel"
            className={`${classess.option} ${classess.option2}`}
            onClick={() => setSelect(ArrayOfMenu[0])}
          >
            <RiFunctionAddLine style={{ marginRight: "5px" }} />
            {ArrayOfMenu[0]}
          </Box>
          <Box
            value="Desctiption"
            className={classess.option}
            onClick={() => setSelect(ArrayOfMenu[1])}
          >
            <PiLampPendantLight style={{ marginRight: "5px" }} />
            {ArrayOfMenu[1]}
          </Box>
          <Box
            value="Rule"
            className={classess.option}
            onClick={() => setSelect(ArrayOfMenu[2])}
          >
            <FiUmbrella style={{ marginRight: "5px" }} />
            {ArrayOfMenu[2]}
          </Box>
          <Box
            value="Tip"
            className={`${classess.option} ${classess.option3}`}
            onClick={() => setSelect(ArrayOfMenu[3])}
          >
            <FiDribbble style={{ marginRight: "5px" }} />
            {ArrayOfMenu[3]}
          </Box>
        </Box>
        {/* <select
          value={Select}
          onChange={(e) => setSelect(e.target.value)}
          className={classess.AI1}
        >
          <Box value="Titel">Titel erstellen</Box>
          <Box value="Desctiption">Beschreibung hinzufügen</Box>
          <Box value="Rule">Regel hinzufügen</Box>
          <Box value="Tip">Trinkgeld hinzufügen</Box>
        </select> */}

        {/* <select
          value={Select}
          className={classess.AI1}
          onChange={(e) => setSelect(e.target.value)}
        >
          <Box value="Titel">Titel erstellen</Box>
          <Box value="Titel">Titel erstellen</Box>
        </select> */}
        <Divider className={classess.Divider3} />
        <Divider className={classess.Divider4} />
      </Box>
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
        className={classess.TitleInput}
        placeholder="Bedeutung auf Englisch"
      />
      <input
        type="text"
        name="FA"
        value={FA}
        onChange={(e) => setFA(e.target.value)}
        className={classess.TitleInput}
        placeholder="Bedeutung auf Persisch"
      />
      <BTN padding="12px 22px 12px 22px">in der Datenbank speichern</BTN>
    </Box>
  );
};

export default Add;
