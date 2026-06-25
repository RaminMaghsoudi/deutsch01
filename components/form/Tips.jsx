import React, { Fragment } from "react";
import classess from "./Form.module.css";

const Tips = ({ setShowMessage, SelectItems, Tip, setTip, Editable }) => {
  return (
    <Fragment>
      <textarea
        type="text"
        name="Target"
        value={Tip}
        onChange={(e) => {
          setTip(e.target.value);
          setShowMessage(false);
        }}
        className={classess.TitleTextarea}
        placeholder="Tipp Hinzufügen"
      />
      <input type="hidden" name="Type" value="TIP" />
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

export default Tips;
