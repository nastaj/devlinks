import { createContext, useContext, useEffect, useState } from "react";
import useLinks from "../features/editor/useLinks";

const FormsContext = createContext();

function FormsProvider({ children }) {
  const [forms, setForms] = useState();
  const [newFormIsOpen, setNewFormIsOpen] = useState(false);

  useEffect(function () {
    setForms([]);
  }, []);

  return (
    <FormsContext.Provider
      value={{
        forms,
        setForms,
        newFormIsOpen,
        setNewFormIsOpen,
      }}
    >
      {children}
    </FormsContext.Provider>
  );
}

function useForms() {
  const context = useContext(FormsContext);

  if (context === undefined)
    throw new Error("FormsContext was used outside of FormsProvider");
  return context;
}

export { FormsProvider, useForms };
