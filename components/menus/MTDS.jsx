import React from "react";
import { Divider, MenuItem } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { SiAntdesign } from "react-icons/si";
import { RiDragMoveLine } from "react-icons/ri";

const MTDS = ({ contextMenu, handleEdit, handleDeleteTarget, handleTD }) => {
  return (
    <>
      <MenuItem
        sx={{
          fontFamily: "CL",
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleTD(contextMenu);
        }}
      >
        <CiEdit />
        <span style={{ marginLeft: "7px" }}>TD Erstellen</span>
      </MenuItem>
      <Divider />
      <MenuItem
        sx={{
          fontFamily: "CL",
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleEdit(contextMenu);
        }}
      >
        <CiEdit />
        <span style={{ marginLeft: "7px" }}>Tabel Bearbeiten</span>
      </MenuItem>
      <MenuItem
        sx={{
          fontFamily: "CL",
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleDeleteTarget(contextMenu.content.id);
        }}
      >
        <AiOutlineDelete />
        <span style={{ marginLeft: "7px" }}>Tabel Löschen</span>
      </MenuItem>
      <Divider />
      <MenuItem
        sx={{
          fontFamily: "CL",
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleDeleteTarget(contextMenu.content.Title);
        }}
      >
        <RiDragMoveLine />
        <span style={{ marginLeft: "7px" }}>Tabel übertragen</span>
      </MenuItem>
    </>
  );
};

export default MTDS;
