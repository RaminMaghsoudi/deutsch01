import React, { Fragment } from "react";
import classess from "./Form.module.css";

const Description = ({
  setShowMessage,
  SelectItems,
  Desc,
  setDesc,
  Editable,
}) => {
  return (
    <Fragment>
      <textarea
        type="text"
        name="Target"
        value={Desc}
        onChange={(e) => {
          setDesc(e.target.value);
          setShowMessage(false);
        }}
        className={classess.TitleTextarea}
        placeholder="Beschreibung Hinzufügen"
      />
      <input type="hidden" name="Type" value="DESCRIPTION" />
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

export default Description;
