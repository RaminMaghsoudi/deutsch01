import React, { Fragment } from "react";
import classess from "./Form.module.css";

const Parageraph = ({
  setShowMessage,
  SelectItems,
  Para,
  setPara,
  Editable,
}) => {
  return (
    <Fragment>
      <input
        type="text"
        name="Target"
        value={Para}
        onChange={(e) => {
          setPara(e.target.value);
          setShowMessage(false);
        }}
        className={classess.TitleInput}
        placeholder="Absatz hinzufügen"
      />
      <input type="hidden" name="Type" value="PARAGERAPH" />
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

export default Parageraph;
