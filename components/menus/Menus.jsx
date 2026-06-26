import { Menu } from "@mui/material";
import React from "react";
import MCT from "./MCT";
import MCD from "./MCD";
import MCR from "./MCR";
import MCP from "./MCP";

const Menus = ({
  contextMenu,
  card,
  handleEdit,
  handleDelete,
  handleDeleteTarget,
}) => {
  return (
    <>
      {contextMenu === null ? null : (
        <Menu
          open={contextMenu !== null}
          onClose={() => {
            // setContextMenu(null);
          }}
          anchorReference="anchorPosition"
          anchorPosition={
            contextMenu !== null
              ? {
                  top: contextMenu.mouseY + 50,
                  left: contextMenu.mouseX,
                }
              : undefined
          }
          slotProps={{
            paper: {
              elevation: 0,

              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 3px rgba(0,0,0,0.2))",
                mt: -4,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "& .MuiMenuItem-root.Mui-focusVisible": {
                  backgroundColor: "transparent !important",
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {card === "CT" ? (
            <MCT
              contextMenu={contextMenu}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ) : card === "CD" ? (
            <MCD
              contextMenu={contextMenu}
              handleEdit={handleEdit}
              handleDeleteTarget={handleDeleteTarget}
            />
          ) : card === "CR" ? (
            <MCR
              contextMenu={contextMenu}
              handleEdit={handleEdit}
              handleDeleteTarget={handleDeleteTarget}
            />
          ) : card === "CP" ? (
            <MCP
              contextMenu={contextMenu}
              handleEdit={handleEdit}
              handleDeleteTarget={handleDeleteTarget}
            />
          ) : null}
        </Menu>
      )}
    </>
  );
};

export default Menus;
