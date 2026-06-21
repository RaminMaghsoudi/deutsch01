"use client";

import { createContext, useContext, useState } from "react";
const AC = createContext(null);

export function AppProvider({ children }) {
  const [Title, setTitle] = useState("");
  const [EN, setEN] = useState("");
  const [FA, setFA] = useState("");
  const [Target, setTarget] = useState("");
  const [Select, setSelect] = useState("Titel erstellen");
  const [ShowSelect, setShowSelect] = useState(false);
  const [SelectItems, setSelectItems] = useState(null);

  const ArrayOfMenu = [
    "Titel erstellen",
    "Beschreibung hinzufügen",
    "Regel hinzufügen",
    "Trinkgeld hinzufügen",
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
        Select,
        setSelect,
        ArrayOfMenu,
        ShowSelect,
        setShowSelect,
        SelectItems,
        setSelectItems,
        Target,
        setTarget,
      }}
    >
      {children}
    </AC.Provider>
  );
}
export function useContexts() {
  return useContext(AC);
}
