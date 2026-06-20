"use client";

import { Box, Divider } from "@mui/material";
import React from "react";
import classess from "./Add.module.css";
import { GiButterfly } from "react-icons/gi";
import { useContexts } from "@/app/Context";
import BTN from "../btn/BTN";

const Add = () => {
  const { Title, setTitle, EN, setEN, FA, setFA, Select, setSelect } =
    useContexts();

  return (
    <Box className={classess.Add}>
      <Box className={classess.Header}>
        <GiButterfly className={classess.GiButterfly} />
        <span className={classess.AI1}>
          Titel erstellen
          <Box className={classess.AI2}>
            <span className={classess.option}>subTitel erstellen</span>
            <span className={classess.option}>Ich erstellen</span>
          </Box>
        </span>
        {/* <select
          value={Select}
          className={classess.AI1}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option value="Titel">Titel erstellen</option>
          <option value="Titel">Titel erstellen</option>
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
