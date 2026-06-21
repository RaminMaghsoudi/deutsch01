"use client";

import { Box, ClickAwayListener, Divider } from "@mui/material";
import React, { useActionState, useEffect } from "react";
import classess from "./Add.module.css";
import { GiButterfly } from "react-icons/gi";
import { useContexts } from "@/app/Context";
import BTN from "../btn/BTN";
import { RiFunctionAddLine } from "react-icons/ri";
import { PiLampPendantLight } from "react-icons/pi";
import { GiFlexibleLamp } from "react-icons/gi";
import { FiDribbble } from "react-icons/fi";
import { FiUmbrella } from "react-icons/fi";
import { Insert } from "@/actions";

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
    ShowSelect,
    setShowSelect,
    Target,
    setTarget,
    SelectItems,
    setSelectItems,
  } = useContexts();

  const [state, formAction] = useActionState(Insert, {
    message: null,
  });

  useEffect(() => {
    if (state.success) {
      setTitle("");
      setEN("");
      setFA("");
      setTarget("");
      setSelectItems(null);
    }
  }, [state.success, setTarget, setEN, setFA, setTitle, setSelectItems]);

  return (
    <Box className={classess.Add}>
      <Box className={classess.Header}>
        <GiButterfly className={classess.GiButterfly} />
        <span className={classess.AI1} onClick={() => setShowSelect(true)}>
          {Select}
        </span>
        {ShowSelect ? (
          <ClickAwayListener onClickAway={() => setShowSelect(false)}>
            <Box className={classess.AI2}>
              <Box
                value="Titel"
                className={`${classess.option} ${classess.option2}`}
                onClick={() => {
                  setSelect(ArrayOfMenu[0]);
                  setShowSelect(false);
                }}
              >
                <RiFunctionAddLine style={{ marginRight: "5px" }} />
                {ArrayOfMenu[0]}
              </Box>
              <Box
                value="Desctiption"
                className={classess.option}
                onClick={() => {
                  setSelect(ArrayOfMenu[1]);
                  setShowSelect(false);
                }}
              >
                <PiLampPendantLight style={{ marginRight: "5px" }} />
                {ArrayOfMenu[1]}
              </Box>
              <Box
                value="Rule"
                className={classess.option}
                onClick={() => {
                  setSelect(ArrayOfMenu[2]);
                  setShowSelect(false);
                }}
              >
                <FiUmbrella style={{ marginRight: "5px" }} />
                {ArrayOfMenu[2]}
              </Box>
              <Box
                value="Tip"
                className={`${classess.option} ${classess.option3}`}
                onClick={() => {
                  setSelect(ArrayOfMenu[3]);
                  setShowSelect(false);
                }}
              >
                <FiDribbble style={{ marginRight: "5px" }} />
                {ArrayOfMenu[3]}
              </Box>
            </Box>
          </ClickAwayListener>
        ) : null}
        <Divider className={classess.Divider3} />
        <Divider className={classess.Divider4} />
      </Box>
      <form action={formAction} className={classess.Form}>
        {Select === "Titel erstellen" ? (
          <>
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
          </>
        ) : Select === "Beschreibung hinzufügen" ? (
          <>
            <textarea
              type="text"
              name="Target"
              value={Target}
              onChange={(e) => setTarget(e.target.value)}
              className={classess.TitleTextarea}
              placeholder="Beschreibung Hinzufügen"
            />
            <input type="hidden" name="Type" value="DESCRIPTION" />
            <input
              type="hidden"
              name="Title"
              value={SelectItems?.Title || ""}
            />
            <input type="hidden" name="EN" value={SelectItems?.EN || ""} />
            <input type="hidden" name="FA" value={SelectItems?.FA || ""} />
          </>
        ) : null}
        <BTN padding="12px 22px 12px 22px">in der Datenbank speichern</BTN>
        {state.message && (
          <Box className={state.success ? classess.Success : classess.Error}>
            {state.message}
          </Box>
        )}
      </form>
    </Box>
  );
};

export default Add;
