import React from "react";
import { Divider, MenuItem } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { RiDragMoveLine } from "react-icons/ri";

const MCP = ({ contextMenu, handleEdit, handleDeleteTarget }) => {
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
        <span style={{ marginLeft: "7px" }}>Tipp Bearbeiten</span>
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
        <span style={{ marginLeft: "7px" }}>Tipp Löschen</span>
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
        <span style={{ marginLeft: "7px" }}>Tipp übertragen</span>
      </MenuItem>
    </>
  );
};

export default MCP;
