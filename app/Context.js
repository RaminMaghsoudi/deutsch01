"use client";

import { createContext, useContext, useState } from "react";
const AC = createContext(null);

export function AppProvider({ children }) {
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
  const ArrayOfMainMenu = [
    "Füge eine Lernkarte hinzu",
    "Konjugation von Verben",
    "Vorschriften und Konstanten",
  ];

  const [SelectMenu, setSelectMenu] = useState(ArrayOfMenu[0]);
  const [SelectMainMenu, setSelectMainMenu] = useState(ArrayOfMainMenu[0]);
  const [ShowSelectMenu, setShowSelectMenu] = useState(false);
  const [ShowMainMenu, setShowMainMenu] = useState(false);
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
        ShowMainMenu,
        setShowMainMenu,
        ArrayOfMainMenu,
        SelectMainMenu,
        setSelectMainMenu,
      }}
    >
      {children}
    </AC.Provider>
  );
}
export function useContexts() {
  return useContext(AC);
}
