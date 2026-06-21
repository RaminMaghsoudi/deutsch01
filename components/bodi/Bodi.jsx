"use client";

import { Box } from "@mui/material";
import React from "react";
import classess from "./Bodi.module.css";
import { GiChestnutLeaf } from "react-icons/gi";
import { PiButterflyLight } from "react-icons/pi";
import { SlUmbrella } from "react-icons/sl";
import { FaRegGrinBeam } from "react-icons/fa";
import { useContexts } from "@/app/Context";
import { GrMultiple } from "react-icons/gr";
import { TiPlaneOutline } from "react-icons/ti";
import { BsCheck2All } from "react-icons/bs";
import { BsUiChecksGrid } from "react-icons/bs";
import { BsShieldCheck } from "react-icons/bs";
import { BiMessageSquareCheck } from "react-icons/bi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { PiShieldCheckLight } from "react-icons/pi";
import { PiSealCheckThin } from "react-icons/pi";

const Bodi = ({ grouped }) => {
  const { SelectItems, setSelectItems } = useContexts();
  console.log(grouped);
  return (
    <Box className={classess.Bodi}>
      {grouped.map((GM, ID) => (
        <Box
          key={ID}
          className={classess.Items}
          onClick={() => setSelectItems(GM)}
          sx={{
            backgroundColor:
              SelectItems !== null
                ? SelectItems.Title.trim().toLowerCase() ===
                  GM.Title.trim().toLowerCase()
                  ? "rgba(150, 150, 150, 0.1)"
                  : ""
                : "",
            border:
              SelectItems !== null
                ? SelectItems.Title.trim().toLowerCase() ===
                  GM.Title.trim().toLowerCase()
                  ? "1px dashed rgba(0, 0, 0)"
                  : "1px dashed rgba(100, 100, 100, 0.4)"
                : "1px dashed rgba(100, 100, 100, 0.4)",
          }}
        >
          <Box className={classess.UbensTitle}>
            <GiChestnutLeaf />
            <span className={classess.UT_Title}>{GM.Title}</span>
            <span className={classess.UT_EN}>{GM.EN} :</span>
          </Box>
          {GM.items.map((GMI, Index) => (
            <Box
              key={Index}
              className={
                GMI.Type === "DESCRIPTION"
                  ? classess.UbensDescription
                  : GMI.Type === "RULE"
                    ? classess.UbensRule
                    : GMI.Type === "TIP"
                      ? classess.UbensTip
                      : ""
              }
            >
              {GMI.Type === "RULE" ? (
                <Box className={classess.Icons}>
                  <BsCheck2All />
                </Box>
              ) : GMI.Type === "TIP" ? (
                <Box className={classess.Icons}>
                  <PiSealCheckThin />
                </Box>
              ) : null}
              {GMI.Target} 
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Bodi;
