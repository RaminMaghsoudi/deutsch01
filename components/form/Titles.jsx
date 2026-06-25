import { Box } from "@mui/material";
import React, { Fragment } from "react";
import classess from "./Form.module.css";

const Titles = ({
  setShowMessage,
  Title,
  setTitle,
  EN,
  setEN,
  FA,
  setFA,
  Editable,
}) => {
  return (
    <Fragment>
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
      {Editable !== null ? (
        <input
          type="hidden"
          name="OldTitle"
          value={Editable.content.Title}
        />
      ) : null}
    </Fragment>
  );
};

export default Titles;
