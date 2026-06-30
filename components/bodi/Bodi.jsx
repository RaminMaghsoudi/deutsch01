"use client";

import { Box, Card } from "@mui/material";
import React from "react";
import classess from "./Bodi.module.css";
import { GiButterfly } from "react-icons/gi";
import { useContexts } from "@/app/Context";
import Menus from "../menus/Menus";
import { useRouter } from "next/navigation";
import { Delete, DeleteTarget } from "@/actions";
import { BsCheck2All } from "react-icons/bs";
import { LuCoffee } from "react-icons/lu";
import Image from "next/image";
import U from "../../public/U.jpg";
import { PiCardsThree } from "react-icons/pi";
import { BiChevronRight } from "react-icons/bi";
import { LuCircleGauge } from "react-icons/lu";

const Bodi = ({ grouped, fetchTD, fetchSTD, fetchAllRule }) => {
  const router = useRouter();
  const {
    contextMenu,
    setContextMenu,
    setSelectMenu,
    ArrayOfMenu,
    setTitle,
    setEN,
    setFA,
    setEditable,
    Editable,
    SelectItems,
    setSelectItems,
    setShowMessage,
    setDesc,
    setRule,
    setTip,
    setTable,
    SelectMainMenu,
    ArrayOfMainMenu,
  } = useContexts();

  const handleContextMenu = (event, content, status) => {
    event.preventDefault();
    setContextMenu({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
      content: content,
      status: status,
    });
  };
  const handleEdit = async (content) => {
    if (content.status === "CT") {
      setEditable(content);
      setTitle(content.content.Title);
      setEN(content.content.EN);
      setFA(content.content.FA);
      setSelectMenu(ArrayOfMenu[0]);
      setSelectItems(null);
    }
    if (content.status === "CD") {
      setEditable(content);
      setDesc(content.content.Target);
      setSelectMenu(ArrayOfMenu[1]);
      setSelectItems(null);
    }
    if (content.status === "CR") {
      setEditable(content);
      setRule(content.content.Target);
      setSelectMenu(ArrayOfMenu[2]);
      setSelectItems(null);
    }
    if (content.status === "CP") {
      setEditable(content);
      setTip(content.content.Target);
      setSelectMenu(ArrayOfMenu[3]);
      setSelectItems(null);
    }
    if (content.status === "TDS") {
      setEditable(content);
      setTable(content.content.Target);
      setSelectMenu(ArrayOfMenu[5]);
      setSelectItems(null);
    }
    if (content.status === "CTD") {
      setEditable(content);
      setTable(content.content.Target);
      setSelectMenu(ArrayOfMenu[5]);
      setSelectItems(null);
    }
    setContextMenu(null);
  };
  const RemoveEditable = () => {
    setEditable(null);
    setTitle("");
    setEN("");
    setFA("");
    setDesc("");
    setRule("");
    setTip("");
    setTable("");
    setSelectItems(null);
    setShowMessage(false);
    setContextMenu(null);
  };
  const handleDelete = async (title) => {
    try {
      const result = await Delete(title);
      if (result.success) router.refresh();
    } catch (err) {
      console.log(err);
    }
    setContextMenu(null);
  };
  const handleDeleteTarget = async (id) => {
    try {
      const result = await DeleteTarget(id);
      if (result.success) {
        router.refresh();
        RemoveEditable();
      }
    } catch (err) {
      console.log(err);
    }
    setContextMenu(null);
  };
  const handleTD = (content) => {
    setSelectMenu(ArrayOfMenu[6]);
    setSelectItems(content.content);
    setContextMenu(null);
  };
  const handleSTD = (content) => {
    setSelectMenu(ArrayOfMenu[7]);
    setSelectItems(content.content);
    setContextMenu(null);
  };

  return (
    <Box
      className={classess.Bodi}
      onClick={() => {
        RemoveEditable();
      }}
    >
      {SelectMainMenu === ArrayOfMainMenu[0] ? (
        grouped.length === 0 ? (
          <Box className={classess.Wrapper}>
            <GiButterfly className={classess.GiButterfly} />
            <span className={classess.Der}>Der Erfolg gehört mir.</span>
            <span className={classess.Nutzen}>
              Nutzen Sie das Menü auf der linken Seite, um fortzufahren.
            </span>
          </Box>
        ) : (
          grouped.map((GM, ID) => (
            <Box
              key={ID}
              className={classess.Card}
              onClick={(e) => {
                e.stopPropagation();
                RemoveEditable();
              }}
              onDoubleClick={() => setSelectItems(GM)}
              sx={{
                borderLeft: `2px solid
                ${
                  Editable !== null &&
                  Editable.content.Title.trim().toLowerCase() ===
                    GM.Title.trim().toLowerCase()
                    ? "red"
                    : SelectItems !== null &&
                        SelectItems.Title.trim().toLowerCase() ===
                          GM.Title.trim().toLowerCase()
                      ? "greenyellow"
                      : "white"
                }`,
                minHeight: "125px",
              }}
            >
              <Box
                className={classess.CardTitle}
                onContextMenu={(e) => handleContextMenu(e, GM, "CT")}
                sx={{ minHeight: "125px", width: "300px" }}
              >
                <Image
                  src={U}
                  alt="line"
                  width={30}
                  height={30}
                  className={classess.U}
                />
                <span className={classess.CT}>{GM.Title}</span>
                {GM.EN.length === 0 ? null : (
                  <span className={classess.EN}>{GM.EN}</span>
                )}
              </Box>
              <Box
                className={classess.CardInfo}
                sx={{ minHeight: "125px", width: "calc(100% - 300px)" }}
              >
                {GM.items.map((GMI, Index) => (
                  <div
                    key={Index}
                    className={
                      GMI.Type === "EXAMPLE"
                        ? classess.EXAMPLE
                        : GMI.Type === "PARAGERAPH"
                          ? classess.PARAGERAPH
                          : ""
                    }
                  >
                    {GMI.Type === "PARAGERAPH" ? (
                      <Box className={classess.Line}></Box>
                    ) : null}
                    <Box
                      className={
                        GMI.Type === "DESCRIPTION"
                          ? classess.Description
                          : GMI.Type === "RULE"
                            ? classess.Rule
                            : GMI.Type === "TIP"
                              ? classess.Tip
                              : GMI.Type === "TABLE"
                                ? classess.Table
                                : ""
                      }
                      onContextMenu={(e) =>
                        handleContextMenu(
                          e,
                          GMI,
                          GMI.Type === "RULE"
                            ? "CR"
                            : GMI.Type === "TIP"
                              ? "CP"
                              : GMI.Type === "DESCRIPTION"
                                ? "CD"
                                : GMI.Type === "TABLE"
                                  ? "TDS"
                                  : null,
                        )
                      }
                    >
                      {GMI.Type === "RULE" ? (
                        <Box className={classess.Icons}>
                          <BsCheck2All size={18} />
                        </Box>
                      ) : GMI.Type === "TIP" ? (
                        <Box className={classess.Icons}>
                          <LuCoffee />
                        </Box>
                      ) : null}
                      {GMI.Type?.startsWith("TD") ||
                      GMI.Type?.startsWith("STD") ||
                      GMI.Type?.startsWith(
                        "EXAMPLECHILD",
                      ) ? null : GMI.Type?.startsWith("EXAMPLE") ? (
                        <>
                          <LuCircleGauge className={classess.GiCoffeeCup} />
                          {GMI.Target}
                          <span className={classess.MdArrowRightAlt}>→</span>
                          {GM.items[Index + 2]?.Target}
                        </>
                      ) : (
                        GMI.Target
                      )}
                    </Box>
                    <Box className={classess.TDS}>
                      {fetchTD.map((FTD, INDEX) =>
                        GMI.Type?.startsWith("TABLE") &&
                        GMI.Type !== null &&
                        Number(FTD.Type.split("-")[1]) === GMI.id ? (
                          <Box key={INDEX}>
                            <Box
                              className={classess.TD}
                              onContextMenu={(e) =>
                                handleContextMenu(e, FTD, "CTD")
                              }
                            >
                              {FTD.Target}
                            </Box>
                            {fetchSTD.map((FSTD, INDEX) =>
                              Number(FSTD.Type.split("-")[1]) === FTD.id ? (
                                <Box key={INDEX} className={classess.STDS}>
                                  {FSTD.Target}
                                </Box>
                              ) : null,
                            )}
                          </Box>
                        ) : null,
                      )}
                    </Box>
                  </div>
                ))}
                <Menus
                  contextMenu={contextMenu}
                  setContextMenu={setContextMenu}
                  card={contextMenu !== null && contextMenu.status}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  handleDeleteTarget={handleDeleteTarget}
                  handleTD={handleTD}
                  handleSTD={handleSTD}
                />
              </Box>
            </Box>
          ))
        )
      ) : SelectMainMenu === ArrayOfMainMenu[1] ? (
        fetchAllRule.length === 0 ? (
          <Box className={classess.Wrapper}>
            <GiButterfly className={classess.GiButterfly} />
            <span className={classess.Der}>Der Erfolg gehört mir.</span>
            <span className={classess.Nutzen}>
              Nutzen Sie das Menü auf der linken Seite, um fortzufahren.
            </span>
          </Box>
        ) : (
          fetchAllRule.map((FAR, ID) => (
            <Box
              key={ID}
              className={classess.Card}
              sx={{
                borderLeft: `2px solid white`,
                minHeight: "200px",
              }}
            >
              <Box
                className={classess.CardTitle}
                sx={{ minHeight: "200px", width: "150px" }}
              >
                <PiCardsThree className={classess.PiCardsThree} />
                <span className={classess.CT}>{FAR.Verb}</span>
                {FAR.EN.length === 0 ? null : (
                  <span className={classess.EN}>{FAR.EN}</span>
                )}
              </Box>
              <Box
                className={classess.CardInfoVerb}
                sx={{ minHeight: "200px", width: "calc(100% - 150px)" }}
              >
                <Box
                  className={classess.CIV}
                  sx={{ minHeight: "200px", width: "25%" }}
                >
                  <span className={classess.CIVText}>Futur</span>
                  {FAR.Future1.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Future1}
                    </span>
                  )}
                  {FAR.Future2.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Future2}
                    </span>
                  )}
                  {FAR.Future3.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Future3}
                    </span>
                  )}
                  {FAR.Future4.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Future4}
                    </span>
                  )}
                  {FAR.Future5.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Future5}
                    </span>
                  )}
                  {FAR.Future6.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Future6}
                    </span>
                  )}
                </Box>
                <Box
                  className={classess.CIV}
                  sx={{ minHeight: "200px", width: "25%" }}
                >
                  <span className={classess.CIVText}>Perfekt</span>
                  {FAR.Perfect1.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Perfect1}
                    </span>
                  )}
                  {FAR.Perfect2.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Perfect2}
                    </span>
                  )}
                  {FAR.Perfect3.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Perfect3}
                    </span>
                  )}
                  {FAR.Perfect4.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Perfect4}
                    </span>
                  )}
                  {FAR.Perfect5.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Perfect5}
                    </span>
                  )}
                  {FAR.Perfect6.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Perfect6}
                    </span>
                  )}
                </Box>
                <Box
                  className={classess.CIV}
                  sx={{ minHeight: "200px", width: "25%" }}
                >
                  <span className={classess.CIVText}>Präteritum</span>
                  {FAR.Past1.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Past1}
                    </span>
                  )}
                  {FAR.Past2.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Past2}
                    </span>
                  )}
                  {FAR.Past3.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Past3}
                    </span>
                  )}
                  {FAR.Past4.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Past4}
                    </span>
                  )}
                  {FAR.Past5.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Past5}
                    </span>
                  )}
                  {FAR.Past6.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Past6}
                    </span>
                  )}
                </Box>
                <Box
                  className={classess.CIV}
                  sx={{ minHeight: "200px", width: "25%" }}
                >
                  <span className={classess.CIVText}>Präsens</span>
                  {FAR.Present1.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Present1}
                    </span>
                  )}
                  {FAR.Present2.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Present2}
                    </span>
                  )}
                  {FAR.Present3.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Present3}
                    </span>
                  )}
                  {FAR.Present4.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Present4}
                    </span>
                  )}
                  {FAR.Present5.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Present5}
                    </span>
                  )}
                  {FAR.Present6.length === 0 ? null : (
                    <span className={classess.CIVText0}>
                      <BiChevronRight
                        className={classess.IoMdCheckmarkCircleOutline}
                      />
                      {FAR.Present6}
                    </span>
                  )}
                </Box>
              </Box>
            </Box>
          ))
        )
      ) : null}

      <Box sx={{ width: "100%", minHeight: "100px", flexShrink: "0" }}></Box>
    </Box>
  );
};

export default Bodi;
