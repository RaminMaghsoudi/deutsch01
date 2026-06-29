"use client";

import { Box } from "@mui/material";
import React, { useActionState, useEffect, useRef } from "react";
import classess from "./Form.module.css";
import { useContexts } from "@/app/Context";
import Titles from "./Titles";
import Examples from "./Examples";
import BTN from "../btn/BTN";
import Description from "./Description";
import Rules from "./Rules";
import Tips from "./Tips";
import { Save } from "@/actions";
import Tables from "./Tables";
import TD from "./TD";
import STD from "./STD";
import { IoIosColorFilter } from "react-icons/io";
import { IoIosSnow } from "react-icons/io";
import { IoIosUmbrella } from "react-icons/io";
import { IoLogoDribbble } from "react-icons/io";
import VI from "./VI";

const FormVerb = ({ grouped }) => {
  const prevTimestamp = useRef(null);
  const {
    SelectMenu,
    ArrayOfMenu,
    ShowMessage,
    setShowMessage,
    SelectItems,
    setSelectItems,
    Title,
    setTitle,
    EN,
    setEN,
    FA,
    setFA,
    Desc,
    setDesc,
    Rule,
    setRule,
    Tip,
    setTip,
    Editable,
    setEditable,
    Table,
    setTable,
    Example,
    setExample,
    ExampleEN,
    setExampleEN,
    ExampleFA,
    setExampleFA,
  } = useContexts();

  const [state, formAction] = useActionState(Save, {
    success: false,
    message: null,
    timestamp: null,
  });
  useEffect(() => {
    if (!state.status) setShowMessage(true);
    if (state.timestamp && state.timestamp !== prevTimestamp.current) {
      prevTimestamp.current = state.timestamp;
      setTitle("");
      setEN("");
      setFA("");
      setDesc("");
      setRule("");
      setTable("");
      setEditable(null);
      setSelectItems(null);
      setShowMessage(true);
      const timer = setTimeout(() => setShowMessage(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [
    state.status,
    setShowMessage,
    state.timestamp,
    setEN,
    setFA,
    setTitle,
    setSelectItems,
    setEditable,
    setDesc,
    setRule,
    setTable,
  ]);

  return (
    <form action={formAction} className={classess.FormVerb}>
      <input
        type="text"
        name="Title"
        value={Title}
        onChange={(e) => {
          setTitle(e.target.value);
          setShowMessage(false);
        }}
        className={classess.TitleInput}
        placeholder="Verb"
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
        placeholder="Verb-EN"
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
        placeholder="Verb-FA"
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
        placeholder="Verb-Aussprache"
      />
      {/* HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH  Präsens */}
      <Box className={classess.TitleType}>
        <IoIosColorFilter className={classess.Time} />
        <span className={classess.TimeSpan}>Präsens</span>
      </Box>
      <VI
        title="ICH"
        name="FA"
        value={FA}
        Change={(e) => {
          setFA(e.target.value);
          setShowMessage(false);
        }}
      />
      <VI
        title="DU"
        name="FA"
        value={FA}
        Change={(e) => {
          setFA(e.target.value);
          setShowMessage(false);
        }}
      />
      <VI
        title="ER/SIE/ES"
        name="FA"
        value={FA}
        Change={(e) => {
          setFA(e.target.value);
          setShowMessage(false);
        }}
      />
      <VI
        title="WIR"
        name="FA"
        value={FA}
        Change={(e) => {
          setFA(e.target.value);
          setShowMessage(false);
        }}
      />
      <VI
        title="IHR"
        name="FA"
        value={FA}
        Change={(e) => {
          setFA(e.target.value);
          setShowMessage(false);
        }}
      />
      <VI
        title="sie/Sie"
        name="FA"
        value={FA}
        Change={(e) => {
          setFA(e.target.value);
          setShowMessage(false);
        }}
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
        placeholder="Verb-Aussprache"
      />
      {/* HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH Präteritum*/}
      <Box className={classess.TitleType}>
        <IoIosSnow className={classess.Time} />
        <span className={classess.TimeSpan}>Präteritum</span>
      </Box>
      <input
        type="text"
        name="FA"
        value={FA}
        onChange={(e) => {
          setFA(e.target.value);
          setShowMessage(false);
        }}
        className={classess.TitleInput}
        placeholder="Verb-Aussprache"
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
        placeholder="Verb-Aussprache"
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
        placeholder="Verb-Aussprache"
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
        placeholder="Verb-Aussprache"
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
        placeholder="Verb-Aussprache"
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
        placeholder="Verb-Aussprache"
      />
      {/* HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH Perfekt*/}
      <Box className={classess.TitleType}>
        <IoLogoDribbble className={classess.Time} />
        <span className={classess.TimeSpan}>Perfekt</span>
      </Box>
      <input
        type="text"
        name="FA"
        value={FA}
        onChange={(e) => {
          setFA(e.target.value);
          setShowMessage(false);
        }}
        className={classess.TitleInput}
        placeholder="Verb-Aussprache"
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
        placeholder="Verb-Aussprache"
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
        placeholder="Verb-Aussprache"
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
        placeholder="Verb-Aussprache"
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
        placeholder="Verb-Aussprache"
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
        placeholder="Verb-Aussprache"
      />
      {/* HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH Futur*/}
      <Box className={classess.TitleType}>
        <IoIosUmbrella className={classess.Time} />
        <span className={classess.TimeSpan}>Futur</span>
      </Box>
      <input
        type="text"
        name="FA"
        value={FA}
        onChange={(e) => {
          setFA(e.target.value);
          setShowMessage(false);
        }}
        className={classess.TitleInput}
        placeholder="Verb-Aussprache"
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
        placeholder="Verb-Aussprache"
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
        placeholder="Verb-Aussprache"
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
        placeholder="Verb-Aussprache"
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
        placeholder="Verb-Aussprache"
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
        placeholder="Verb-Aussprache"
      />
      {Editable !== null ? (
        <input type="hidden" name="OldTitle" value={Editable.content.Title} />
      ) : null}
      <BTN padding="12px 22px 12px 22px" color="rgb(36, 2, 68)">
        in der Datenbank speichern
      </BTN>
      {ShowMessage && state.message && (
        <Box className={state.success ? classess.Success : classess.Error}>
          {state.message}
        </Box>
      )}
      <input
        type="hidden"
        name="mode"
        value={
          Editable === null
            ? "insert"
            : Editable.status === "CD" ||
                Editable.status === "CR" ||
                Editable.status === "CP" ||
                Editable.status === "TDS" ||
                Editable.status === "CTD"
              ? "updateTarget"
              : "update"
        }
      />
    </form>
  );
};

export default FormVerb;
