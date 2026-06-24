"use client";

import { Box, ClickAwayListener, Divider } from "@mui/material";
import React, { useActionState, useEffect, useRef, useState } from "react";
import classess from "./Add.module.css";
import { GiButterfly } from "react-icons/gi";
import { useContexts } from "@/app/Context";
import BTN from "../btn/BTN";
import { RiFunctionAddLine } from "react-icons/ri";
import { PiLampPendantLight } from "react-icons/pi";
import { GiFlexibleLamp } from "react-icons/gi";
import { FiDribbble } from "react-icons/fi";
import { FiUmbrella } from "react-icons/fi";
import { Insert, Update, UpdateTarget } from "@/actions";
import { PiUmbrellaLight } from "react-icons/pi";
import { PiHexagonLight } from "react-icons/pi";
import { WiDirectionUpRight } from "react-icons/wi";
import { GoArrowUpRight } from "react-icons/go";
import { CiSaveUp2 } from "react-icons/ci";
import { CgController } from "react-icons/cg";
import { LuQrCode } from "react-icons/lu";
import { IoLayersOutline } from "react-icons/io5";
import { RxLayers } from "react-icons/rx";

const Add = () => {
  const prevTimestamp = useRef(null);
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
    Editable,
    setEditable,
    showMessage,
    insertTD,
    setShowMessage,
  } = useContexts();

  const [state, formAction] = useActionState(
    Editable === null
      ? Insert
      : Editable.status === "T"
        ? Update
        : Editable.status === "D" ||
            Editable.status === "R" ||
            Editable.status === "P" ||
            Editable.status === "B" ||
            Editable.status === "C"
          ? UpdateTarget
          : Insert,
    {
      success: false,
      message: null,
      timestamp: null,
    },
  );

  useEffect(() => {
    if (state.timestamp && state.timestamp !== prevTimestamp.current) {
      prevTimestamp.current = state.timestamp;
      setTitle("");
      setEN("");
      setFA("");
      setTarget("");
      setSelectItems(null);
      setEditable(null);
      setShowMessage(true);
    }
    if (!state.status) setShowMessage(true);
  }, [
    state,
    state.timestamp,
    setTarget,
    setEN,
    setFA,
    setTitle,
    setSelectItems,
    setEditable,
    Editable,
    setShowMessage,
  ]);
  const RemoveEditable = () => {
    setEditable(null);
    setTitle("");
    setEN("");
    setFA("");
    setTarget("");
    setSelectItems(null);
    setEditable(null);
    setShowMessage(true);
  };

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
                <CgController
                  style={{ marginRight: "10px", fontSize: "18px" }}
                />
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
                <PiLampPendantLight
                  style={{ marginRight: "10px", fontSize: "18px" }}
                />
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
                <PiUmbrellaLight
                  style={{ marginRight: "10px", fontSize: "18px" }}
                />
                {ArrayOfMenu[2]}
              </Box>
              <Box
                value="Tip"
                className={`${classess.option}`}
                onClick={() => {
                  setSelect(ArrayOfMenu[3]);
                  setShowSelect(false);
                }}
              >
                <GoArrowUpRight
                  style={{ marginRight: "10px", fontSize: "18px" }}
                />
                {ArrayOfMenu[3]}
              </Box>
              <Box
                value="Tip"
                className={`${classess.option} ${classess.option3}`}
                onClick={() => {
                  setSelect(ArrayOfMenu[4]);
                  setShowSelect(false);
                }}
              >
                <RxLayers style={{ marginRight: "10px", fontSize: "18px" }} />
                {ArrayOfMenu[4]}
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
              onChange={(e) => {
                setTitle(e.target.value);
                setShowMessage(false);
              }}
              className={classess.TitleInput}
              placeholder="Titel Hinzufügen"
            />
            <input
              type="text"
              name="EN"
              value={EN}
              onChange={(e) => {
                setEN(e.target.value);
                setShowMessage(false);
              }}
              className={classess.TitleInput}
              placeholder="Bedeutung auf Englisch"
            />
            <input
              type="text"
              name="FA"
              value={FA}
              onChange={(e) => {
                setFA(e.target.value);
                setShowMessage(false);
              }}
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
              onChange={(e) => {
                setTarget(e.target.value);
                setShowMessage(false);
              }}
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
        ) : Select === "Regel hinzufügen" ? (
          <>
            <textarea
              type="text"
              name="Target"
              value={Target}
              onChange={(e) => {
                setTarget(e.target.value);
                setShowMessage(false);
              }}
              className={classess.TitleTextarea}
              placeholder="Regel Hinzufügen"
            />
            <input type="hidden" name="Type" value="RULE" />
            <input
              type="hidden"
              name="Title"
              value={SelectItems?.Title || ""}
            />
            <input type="hidden" name="EN" value={SelectItems?.EN || ""} />
            <input type="hidden" name="FA" value={SelectItems?.FA || ""} />
          </>
        ) : Select === "Trinkgeld hinzufügen" ? (
          <>
            <textarea
              type="text"
              name="Target"
              value={Target}
              onChange={(e) => {
                setTarget(e.target.value);
                setShowMessage(false);
              }}
              className={classess.TitleTextarea}
              placeholder="Trinkgeld Hinzufügen"
            />
            <input type="hidden" name="Type" value="TIP" />
            <input
              type="hidden"
              name="Title"
              value={SelectItems?.Title || ""}
            />
            <input type="hidden" name="EN" value={SelectItems?.EN || ""} />
            <input type="hidden" name="FA" value={SelectItems?.FA || ""} />
          </>
        ) : Select === "Tabelle hinzufügen" ? (
          <>
            <input
              type="text"
              name="Target"
              value={Target}
              onChange={(e) => {
                setTarget(e.target.value);
                setShowMessage(false);
              }}
              className={classess.TitleInput}
              placeholder="TR"
            />
            <input type="hidden" name="Type" value="TABLE" />
            <input
              type="hidden"
              name="Title"
              value={SelectItems?.Title || ""}
            />
            <input type="hidden" name="EN" value={SelectItems?.EN || ""} />
            <input type="hidden" name="FA" value={SelectItems?.FA || ""} />
          </>
        ) : Select === "TD-Tabelle hinzufügen" ? (
          <>
            <input
              type="text"
              name="Target"
              value={Target}
              onChange={(e) => {
                setTarget(e.target.value);
                setShowMessage(false);
              }}
              className={classess.TitleInput}
              placeholder="TD"
            />
            <input
              type="hidden"
              name="Type"
              value={
                insertTD.status === "B"
                  ? `TD-${insertTD.content.id}`
                  : `STD-${insertTD.content.id}`
              }
            />
            <input
              type="hidden"
              name="Title"
              value={SelectItems?.Title || ""}
            />
            <input type="hidden" name="EN" value={SelectItems?.EN || ""} />
            <input type="hidden" name="FA" value={SelectItems?.FA || ""} />
          </>
        ) : null}
        <BTN padding="12px 22px 12px 22px" color="rgb(36, 2, 68)">
          in der Datenbank speichern
        </BTN>
        {showMessage && state.message && (
          <Box className={state.success ? classess.Success : classess.Error}>
            {state.message}
          </Box>
        )}
        {Editable !== null && Editable.status === "T" ? (
          <input type="hidden" name="OldTitle" value={Editable.content} />
        ) : null}
        {Editable !== null &&
        (Editable.status === "D" ||
          Editable.status === "R" ||
          Editable.status === "P") ? (
          <input type="hidden" name="id" value={Editable.id} />
        ) : null}
      </form>
      {Editable == null ? null : (
        <BTN
          OnClick={RemoveEditable}
          padding="12px 40px 12px 40px"
          color="rgb(134, 5, 5)"
        >
          bearbeiten abbrechen
        </BTN>
      )}
    </Box>
  );
};

export default Add;
