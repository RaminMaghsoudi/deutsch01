"use client";

import React from "react";
import classess from "./BTN.module.css";

const BTN = ({ children, padding }) => {
  return (
    <button type="submit" className={classess.BTN} style={{ padding: padding }}>
      {children}
    </button>
  );
};

export default BTN;
