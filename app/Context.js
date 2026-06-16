"use client";

import { createContext, useContext, useState } from "react";
const AC = createContext(null);

export function AppProvider({ children }) {
  const [Title, setTitle] = useState("");
  const [EN, setEN] = useState("");
  const [FA, setFA] = useState("");
  const [Desc, setDesc] = useState("");
  const [Tip, setTip] = useState("");
  const [Rule, setRule] = useState("");
  const [Example, setExample] = useState("");
  const [showAddItems, setShowAddItems] = useState("");
  const [contextMenu, setContextMenu] = useState(null);

  return (
    <AC.Provider
      value={{
        Title,
        setTitle,
        EN,
        setEN,
        FA,
        setFA,
        Desc,
        setDesc,
        Tip,
        setTip,
        Rule,
        setRule,
        Example,
        setExample,
        showAddItems,
        setShowAddItems,
        contextMenu,
        setContextMenu,
      }}
    >
      {children}
    </AC.Provider>
  );
}
export function useContexts() {
  return useContext(AC);
}
