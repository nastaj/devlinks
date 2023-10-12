import { createContext, useContext, useEffect, useState } from "react";
import useLinks from "../features/editor/useLinks";

const FormsContext = createContext();

function FormsProvider({ children }) {
  const [forms, setForms] = useState();
  const [newFormIsOpen, setNewFormIsOpen] = useState(false);
  const { links, isLoading: isLoadingLinks } = useLinks();

  useEffect(
    function () {
      setForms(links);
    },
    [links],
  );

  return (
    <FormsContext.Provider
      value={{
        forms,
        setForms,
        newFormIsOpen,
        setNewFormIsOpen,
        links,
        isLoadingLinks,
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
