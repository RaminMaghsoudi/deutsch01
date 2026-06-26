import React, { Fragment } from "react";
import classess from "./Form.module.css";

const Tables = ({ setShowMessage, SelectItems, Table, setTable, Editable }) => {
  return (
    <Fragment>
      <input
        type="text"
        name="Target"
        value={Table}
        onChange={(e) => {
          setTable(e.target.value);
          setShowMessage(false);
        }}
        className={classess.TitleInput}
        placeholder="Tabelle hinzufügen"
      />
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
      <input type="hidden" name="id" value={Editable?.content?.id || ""} />
    </Fragment>
  );
};

export default Tables;
