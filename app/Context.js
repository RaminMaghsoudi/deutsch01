"use client";

import { createContext, useContext, useState } from "react";
const AC = createContext(null);

export function AppProvider({ children }) {
  const [SelectMenu, setSelectMenu] = useState("Titel erstellen");
  const [ShowSelectMenu, setShowSelectMenu] = useState(false);
  const [ShowMessage, setShowMessage] = useState(false);
  const [SelectItems, setSelectItems] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [contextMenu, setContextMenu] = useState(null);

  const [Editable, setEditable] = useState(null);

  const [Title, setTitle] = useState("");
  const [EN, setEN] = useState("");
  const [FA, setFA] = useState("");
  const [Desc, setDesc] = useState("");
  const [Rule, setRule] = useState("");
  const [Tip, setTip] = useState("");
  const [Table, setTable] = useState("");
  const [Example, setExample] = useState("");
  const [ExampleEN, setExampleEN] = useState("");
  const [ExampleFA, setExampleFA] = useState("");

  const ArrayOfMenu = [
    "Titel erstellen",
    "Beschreibung hinzufügen",
    "Regel hinzufügen",
    "Tipp hinzufügen",
    "Beispiel hinzufügen",
    "Tabelle hinzufügen",
    "TD-Tabelle hinzufügen",
    "STD-Tabelle hinzufügen",
  ];

  return (
    <AC.Provider
      value={{
        SelectMenu,
        setSelectMenu,
        ArrayOfMenu,
        ShowSelectMenu,
        setShowSelectMenu,
        ShowMessage,
        setShowMessage,
        SelectItems,
        setSelectItems,
        Loading,
        setLoading,
        contextMenu,
        setContextMenu,
        Editable,
        setEditable,
        Title,
        setTitle,
        EN,
        setEN,
        FA,
        setFA,
        Desc,
        setDesc,
        Rule,
        setRule,
        Tip,
        setTip,
        Table,
        setTable,
        Example,
        setExample,
        ExampleEN,
        setExampleEN,
        ExampleFA,
        setExampleFA,
      }}
    >
      {children}
    </AC.Provider>
  );
}
export function useContexts() {
  return useContext(AC);
}
