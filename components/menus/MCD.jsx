import React from "react";
import { Divider, MenuItem } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { RiDragMoveLine } from "react-icons/ri";

const MCD = ({ contextMenu, handleEdit, handleDeleteTarget }) => {
  return (
    <>
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
        <span style={{ marginLeft: "7px" }}>Beschreibung Bearbeiten</span>
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
        <span style={{ marginLeft: "7px" }}>Beschreibung Löschen</span>
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
        <span style={{ marginLeft: "7px" }}>Beschreibung übertragen</span>
      </MenuItem>
    </>
  );
};

export default MCD;
