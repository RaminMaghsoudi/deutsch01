"use client";

import { createContext, useContext, useState } from "react";
const AC = createContext(null);

export function AppProvider({ children }) {
  const [Title, setTitle] = useState("");
  const [EN, setEN] = useState("");
  const [FA, setFA] = useState("");
  const [Select, setSelect] = useState("");

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
      }}
    >
      {children}
    </AC.Provider>
  );
}
export function useContexts() {
  return useContext(AC);
}
