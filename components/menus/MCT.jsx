import React from "react";
import { Divider, MenuItem } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

const MCT = ({ contextMenu, handleEdit, handleDelete }) => {
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
        <span style={{ marginLeft: "7px" }}>Titel Bearbeiten</span>
      </MenuItem>
      <MenuItem
        sx={{
          fontFamily: "CL",
        }}
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(contextMenu.content.Title);
        }}
      >
        <AiOutlineDelete />
        <span style={{ marginLeft: "7px" }}>Titel Löschen</span>
      </MenuItem>
    </>
  );
};

export default MCT;
