"use client";

import { createContext, useContext, useState } from "react";
const AC = createContext(null);

export function AppProvider({ children }) {
  const [Title, setTitle] = useState("");
  const [EN, setEN] = useState("");
  const [FA, setFA] = useState("");
  const [Target, setTarget] = useState("");
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
        Target,
        setTarget,
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
