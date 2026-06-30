"use client";

import { Box } from "@mui/material";
import React, { useActionState, useEffect, useRef } from "react";
import classess from "./Form.module.css";
import { useContexts } from "@/app/Context";
import { IoIosColorFilter } from "react-icons/io";
import { IoIosSnow } from "react-icons/io";
import { IoIosUmbrella } from "react-icons/io";
import { IoLogoDribbble } from "react-icons/io";
import VI from "./VI";
import BTN from "../btn/BTN";
import { Save } from "@/actions";

const FormVerb = ({ grouped }) => {
  const prevTimestamp = useRef(null);
  const {
    VM,
    VM1,
    setVM1,
    VN,
    VS1,
    setVS1,
    VS2,
    setVS2,
    VS3,
    setVS3,
    VS4,
    setVS4,
    ShowMessage,
    setShowMessage,
    Editable,
    setEditable,
    setSelectItems,
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
      setEditable(null);
      setSelectItems(null);
      setShowMessage(true);
      setVS1({
        ICH: "",
        DU: "",
        ER: "",
        WIR: "",
        IHR: "",
        SIE: "",
      });
      setVS2({
        ICH: "",
        DU: "",
        ER: "",
        WIR: "",
        IHR: "",
        SIE: "",
      });
      setVS3({
        ICH: "",
        DU: "",
        ER: "",
        WIR: "",
        IHR: "",
        SIE: "",
      });
      setVS4({
        ICH: "",
        DU: "",
        ER: "",
        WIR: "",
        IHR: "",
        SIE: "",
      });
      setVM1({
        Verb: "",
        EN: "",
        FA: "",
        Spell: "",
      });
      const timer = setTimeout(() => setShowMessage(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [
    state.status,
    setShowMessage,
    state.timestamp,
    setSelectItems,
    setEditable,
    setVS1,
    setVS2,
    setVS3,
    setVS4,
    setVM1,
  ]);

  return (
    <form action={formAction} className={classess.FormVerb}>
      {VM.map((item) => (
        <input
          key={item}
          type="text"
          placeholder={
            item === "Verb"
              ? "Verb"
              : item === "EN"
                ? "Verb-EN"
                : item === "FA"
                  ? "Verb-FA"
                  : "Aussprache"
          }
          name={item}
          value={VM1[item]}
          onChange={(e) => {
            setVM1((prev) => ({
              ...prev,
              [item]: e.target.value,
            }));
            setShowMessage(false);
          }}
          className={classess.TitleInput}
        />
      ))}
      {/* HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH  Präsens */}
      <Box className={classess.TitleType}>
        <IoIosColorFilter className={classess.Time} />
        <span className={classess.TimeSpan}>Präsens</span>
      </Box>
      {VN.map((item, ID) => (
        <VI
          key={item}
          title={item === "SIE" ? "sie/Sie" : item}
          name={`Present${ID + 1}`}
          value={VS1[item]}
          Change={(e) => {
            setVS1((prev) => ({
              ...prev,
              [item]: e.target.value,
            }));
            setShowMessage(false);
          }}
        />
      ))}
      {/* HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH Präteritum*/}
      <Box className={classess.TitleType}>
        <IoIosSnow className={classess.Time} />
        <span className={classess.TimeSpan}>Präteritum</span>
      </Box>
      {VN.map((item, ID) => (
        <VI
          key={item}
          title={item === "SIE" ? "sie/Sie" : item}
          name={`Past${ID + 1}`}
          value={VS2[item]}
          Change={(e) => {
            setVS2((prev) => ({
              ...prev,
              [item]: e.target.value,
            }));
            setShowMessage(false);
          }}
        />
      ))}
      {/* HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH Perfekt*/}
      <Box className={classess.TitleType}>
        <IoLogoDribbble className={classess.Time} />
        <span className={classess.TimeSpan}>Perfekt</span>
      </Box>
      {VN.map((item, ID) => (
        <VI
          key={item}
          title={item === "SIE" ? "sie/Sie" : item}
          name={`Perfect${ID + 1}`}
          value={VS3[item]}
          Change={(e) => {
            setVS3((prev) => ({
              ...prev,
              [item]: e.target.value,
            }));
            setShowMessage(false);
          }}
        />
      ))}
      {/* HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH Futur*/}
      <Box className={classess.TitleType}>
        <IoIosUmbrella className={classess.Time} />
        <span className={classess.TimeSpan}>Futur</span>
      </Box>
      {VN.map((item, ID) => (
        <VI
          key={item}
          title={item === "SIE" ? "sie/Sie" : item}
          name={`Future${ID + 1}`}
          value={VS4[item]}
          Change={(e) => {
            setVS4((prev) => ({
              ...prev,
              [item]: e.target.value,
            }));
            setShowMessage(false);
          }}
        />
      ))}
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
            ? "insertverb"
            : Editable.status === "CD"
              ? "updateTarget"
              : "update"
        }
      />
      <Box sx={{ width: "100%", minHeight: "100px", flexShrink: "0" }}></Box>
    </form>
  );
};

export default FormVerb;
