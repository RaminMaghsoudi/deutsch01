"use client";

import { createContext, useContext, useState } from "react";
const AC = createContext(null);

export function AppProvider({ children }) {
  const [Title, setTitle] = useState("");
  const [EN, setEN] = useState("");
  const [FA, setFA] = useState("");
  const [Target, setTarget] = useState("");

  const [SelectMenu, setSelectMenu] = useState("Titel erstellen");
  const [ShowSelectMenu, setShowSelectMenu] = useState(false);
  const [SelectItems, setSelectItems] = useState(null);

  const [contextMenu, setContextMenu] = useState(null);
  const [Editable, setEditable] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [insertTD, setInsertTD] = useState(null);

  const ArrayOfMenu = [
    "Titel erstellen",
    "Beschreibung hinzufügen",
    "Regel hinzufügen",
    "Tipp hinzufügen",
    "Tabelle hinzufügen",
  ];

  return (
    <AC.Provider
      value={{
        Title,
        setTitle,
        EN,
        setEN,
        FA,
        setFA,
        SelectMenu,
        setSelectMenu,
        ArrayOfMenu,
        ShowSelectMenu,
        setShowSelectMenu,
        SelectItems,
        setSelectItems,
        Target,
        setTarget,
        contextMenu,
        setContextMenu,
        Editable,
        setEditable,
        showMessage,
        setShowMessage,
        insertTD,
        setInsertTD,
      }}
    >
      {children}
    </AC.Provider>
  );
}
export function useContexts() {
  return useContext(AC);
}
