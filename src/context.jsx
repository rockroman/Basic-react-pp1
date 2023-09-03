import { createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const hello = "HEY ";
  return (
    <AppContext.Provider value={{ hello }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
