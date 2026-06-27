"use client";

import { Box } from "@mui/material";
import React, { useActionState, useEffect, useRef } from "react";
import classess from "./Form.module.css";
import { useContexts } from "@/app/Context";
import Titles from "./Titles";
import BTN from "../btn/BTN";
import Description from "./Description";
import Rules from "./Rules";
import Tips from "./Tips";
import { Save } from "@/actions";
import Tables from "./Tables";
import TD from "./TD";
import STD from "./STD";

const Form = ({ grouped }) => {
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
    <form action={formAction} className={classess.Form}>
      {SelectMenu === ArrayOfMenu[0] ? (
        <Titles
          setShowMessage={setShowMessage}
          Title={Title}
          setTitle={setTitle}
          EN={EN}
          setEN={setEN}
          FA={FA}
          setFA={setFA}
          Editable={Editable}
        />
      ) : SelectMenu === ArrayOfMenu[1] ? (
        <Description
          setShowMessage={setShowMessage}
          SelectItems={SelectItems}
          Desc={Desc}
          setDesc={setDesc}
          Editable={Editable}
        />
      ) : SelectMenu === ArrayOfMenu[2] ? (
        <Rules
          setShowMessage={setShowMessage}
          SelectItems={SelectItems}
          Rule={Rule}
          setRule={setRule}
          Editable={Editable}
        />
      ) : SelectMenu === ArrayOfMenu[3] ? (
        <Tips
          setShowMessage={setShowMessage}
          SelectItems={SelectItems}
          Tip={Tip}
          setTip={setTip}
          Editable={Editable}
        />
      ) : SelectMenu === ArrayOfMenu[4] ? (
        "455664545"
      ) : SelectMenu === ArrayOfMenu[5] ? (
        <Tables
          setShowMessage={setShowMessage}
          SelectItems={SelectItems}
          Table={Table}
          setTable={setTable}
          Editable={Editable}
        />
      ) : SelectMenu === ArrayOfMenu[6] ? (
        <TD
          setShowMessage={setShowMessage}
          SelectItems={SelectItems}
          Table={Table}
          setTable={setTable}
          Editable={Editable}
        />
      ) : SelectMenu === ArrayOfMenu[7] ? (
        <STD
          setShowMessage={setShowMessage}
          SelectItems={SelectItems}
          Table={Table}
          setTable={setTable}
          Editable={Editable}
        />
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

export default Form;
