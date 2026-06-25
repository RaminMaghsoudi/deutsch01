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
import { Insert, Update, UpdateTarget } from "@/actions";

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
  } = useContexts();

  const [state, formAction] = useActionState(
    Editable === null
      ? Insert
      : Editable.status === "CD" || Editable.status === "CR"
        ? UpdateTarget
        : Update,
    {
      success: false,
      message: null,
      timestamp: null,
    },
  );

  useEffect(() => {
    if (!state.status) setShowMessage(true);
    if (state.timestamp && state.timestamp !== prevTimestamp.current) {
      prevTimestamp.current = state.timestamp;
      setTitle("");
      setEN("");
      setFA("");
      setDesc("");
      setRule("");
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
      ) : null}
      <BTN padding="12px 22px 12px 22px" color="rgb(36, 2, 68)">
        in der Datenbank speichern
      </BTN>
      {ShowMessage && state.message && (
        <Box className={state.success ? classess.Success : classess.Error}>
          {state.message}
        </Box>
      )}
    </form>
  );
};

export default Form;
