import { Box, Tooltip } from "@mui/material";
import React from "react";
import classess from "./Bodi.module.css";
import { IoGrid } from "react-icons/io5";
import { ImDribbble } from "react-icons/im";
import { IoPlanetOutline } from "react-icons/io5";
import { PiLampPendantBold } from "react-icons/pi";
import { GoCloud } from "react-icons/go";

const BodiRule = ({ fetchAllRule }) => {
  return (
    <Box className={classess.BodiRule}>
      {fetchAllRule.length === 0 ? (
        <Box className={classess.Wrapper}>
          <GiButterfly className={classess.GiButterfly} />
          <span className={classess.Der}>Der Erfolg gehört mir.</span>
          <span className={classess.Nutzen}>
            Nutzen Sie das Menü auf der linken Seite, um fortzufahren.
          </span>
        </Box>
      ) : (
        fetchAllRule.map((FAR, ID) => (
          <Box key={ID} className={classess.Card}>
            <Tooltip
              title={`${FAR.FA} / ${FAR.Spell}`}
              arrow
              className={classess.CardHeader}
              slotProps={{
                tooltip: {
                  sx: {
                    fontSize: "1rem",
                    fontFamily: "CL",
                    lineHeight: 1.8,
                    letterSpacing: "0.2px",
                    bgcolor: "#1f2937",
                    color: "#fff",
                    px: 2,
                    py: 0.5,
                    borderRadius: "8px",
                    direction: "rtl",
                    textAlign: "right",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    maxWidth: 320,
                  },
                },
                arrow: {
                  sx: {
                    color: "#1f2937",
                  },
                },
              }}
            >
              <IoGrid className={classess.IoGrid} />
              <div className={classess.CH}>
                <span className={classess.CardEN}>
                  {FAR.EN.length === 0 ? null : FAR.EN}
                </span>
                <span className={classess.CardTitle}>{FAR.Verb}</span>
              </div>
            </Tooltip>
            <Box className={classess.CardInfoVerbTitle}>
              <Box className={classess.CIVT}>
                <span className={classess.CIVText}>
                  <ImDribbble className={classess.Iconss} />
                  Futur
                </span>
              </Box>
              <Box className={classess.CIVT}>
                <span className={classess.CIVText}>
                  <IoPlanetOutline
                    className={`${classess.Iconss} ${classess.Iconss1}`}
                  />
                  Perfekt
                </span>
              </Box>
              <Box className={classess.CIVT}>
                <span className={classess.CIVText}>
                  <PiLampPendantBold
                    className={`${classess.Iconss} ${classess.Iconss1}`}
                  />
                  Präteritum
                </span>
              </Box>
              <Box className={classess.CIVT}>
                <span className={classess.CIVText}>
                  <GoCloud
                    className={`${classess.Iconss} ${classess.Iconss1}`}
                  />
                  Präsens
                </span>
              </Box>
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
};

export default BodiRule;
