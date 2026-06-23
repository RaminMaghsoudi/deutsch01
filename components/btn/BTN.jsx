"use client";

import React from "react";
import classess from "./BTN.module.css";

const BTN = ({ children, padding, color, OnClick }) => {
  return (
    <button
      type="submit"
      className={classess.BTN}
      style={{ padding: padding, color: color }}
      onClick={OnClick}
    >
      {children}
    </button>
  );
};

export default BTN;
