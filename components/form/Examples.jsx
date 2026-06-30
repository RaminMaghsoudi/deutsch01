import { Box } from "@mui/material";
import React, { Fragment } from "react";
import classess from "./Form.module.css";

const Titles = ({
  setShowMessage,
  Example,
  setExample,
  ExampleEN,
  setExampleEN,
  ExampleFA,
  setExampleFA,
  Editable,
  SelectItems,
}) => {
  return (
    <Fragment>
      <input
        type="text"
        name="Example"
        value={Example}
        onChange={(e) => {
          setExample(e.target.value);
          setShowMessage(false);
        }}
        className={classess.TitleInput}
        placeholder="Beispiele Hinzufügen"
      />
      <input
        type="text"
        name="ExampleEN"
        value={ExampleEN}
        onChange={(e) => {
          setExampleEN(e.target.value);
          setShowMessage(false);
        }}
        className={classess.TitleInput}
        placeholder="Beispiele auf Englisch"
      />
      <input
        type="text"
        name="ExampleFA"
        value={ExampleFA}
        onChange={(e) => {
          setExampleFA(e.target.value);
          setShowMessage(false);
        }}
        className={classess.TitleInput}
        placeholder="Beispiele auf Persisch"
      />
      <input type="hidden" name="Type" value="EXAMPLE" />
      <input
        type="hidden"
        name="Title"
        value={SelectItems?.Title || Editable?.content?.Title || ""}
      />
      <input
        type="hidden"
        name="EN"
        value={SelectItems?.EN || Editable?.content?.EN || ""}
      />
      <input
        type="hidden"
        name="FA"
        value={SelectItems?.FA || Editable?.content?.FA || ""}
      />
      {Editable !== null ? (
        <input type="hidden" name="OldTitle" value={Editable.content.Title} />
      ) : null}
    </Fragment>
  );
};

export default Titles;
