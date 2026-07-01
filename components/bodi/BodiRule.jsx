import { Box, Tooltip } from "@mui/material";
import React from "react";
import classess from "./Bodi.module.css";
import { IoGrid } from "react-icons/io5";
import { ImDribbble } from "react-icons/im";
import { IoPlanetOutline } from "react-icons/io5";
import { PiLampPendantBold } from "react-icons/pi";
import { GoCloud } from "react-icons/go";
import { WiDirectionUpRight } from "react-icons/wi";

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
                <ImDribbble className={classess.Iconss} />
                Futur
              </Box>
              <Box className={classess.CIVT}>
                <IoPlanetOutline
                  className={`${classess.Iconss} ${classess.Iconss1}`}
                />
                Perfekt
              </Box>
              <Box className={classess.CIVT}>
                <PiLampPendantBold
                  className={`${classess.Iconss} ${classess.Iconss1}`}
                />
                Präteritum
              </Box>
              <Box className={classess.CIVT}>
                <GoCloud className={`${classess.Iconss} ${classess.Iconss1}`} />
                Präsens
              </Box>
            </Box>
            <Box className={classess.CardInfoVerbTitle1}>
              <Box className={classess.CIVT1}>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Future1}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Future2}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Future3}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Future4}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Future5}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Future6}
                </Box>
              </Box>
              <Box className={classess.CIVT1}>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Perfect1}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Perfect2}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Perfect3}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Perfect4}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Perfect5}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Perfect6}
                </Box>
              </Box>
              <Box className={classess.CIVT1}>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Past1}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Past2}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Past3}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Past4}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Past5}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Past6}
                </Box>
              </Box>
              <Box className={classess.CIVT1}>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Present1}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Present2}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Present3}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Present4}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Present5}
                </Box>
                <Box className={classess.Text1}>
                  <WiDirectionUpRight className={classess.WiDirectionUpRight} />
                  {FAR.Present6}
                </Box>
              </Box>
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
};

export default BodiRule;
