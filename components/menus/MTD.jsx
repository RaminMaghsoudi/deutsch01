import React from "react";
import { Divider, MenuItem } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { SiAntdesign } from "react-icons/si";
import { RiDragMoveLine } from "react-icons/ri";

const MTD = ({ contextMenu, handleEdit, handleDeleteTarget, handleSTD }) => {
  return (
    <>
      <MenuItem
        sx={{
          fontFamily: "CL",
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleSTD(contextMenu);
        }}
      >
        <CiEdit />
        <span style={{ marginLeft: "7px" }}>STD Erstellen</span>
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
        <span style={{ marginLeft: "7px" }}>TD-Tabel Bearbeiten</span>
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
        <span style={{ marginLeft: "7px" }}>TD-Tabel Löschen</span>
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
        <span style={{ marginLeft: "7px" }}>TD-Tabel übertragen</span>
      </MenuItem>
    </>
  );
};

export default MTD;
