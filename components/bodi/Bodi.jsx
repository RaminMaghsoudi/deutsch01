"use client";

import { Box } from "@mui/material";
import React from "react";
import classess from "./Bodi.module.css";
import { GiChestnutLeaf } from "react-icons/gi";
import { PiButterflyLight } from "react-icons/pi";
import { SlUmbrella } from "react-icons/sl";
import { FaRegGrinBeam } from "react-icons/fa";
import { useContexts } from "@/app/Context";

const Bodi = ({ grouped }) => {
  const { SelectItems, setSelectItems } = useContexts();

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
                  ? "rgba(255, 255, 0, 0.2)"
                  : ""
                : "",
          }}
        >
          <Box className={classess.UbensTitle}>
            <GiChestnutLeaf />
            {GM.id}
            <span className={classess.UT_Title}>{GM.Title}</span>
            <span className={classess.UT_EN}>{GM.EN} :</span>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Bodi;
