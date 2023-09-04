import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    const customText = document.querySelectorAll(".custom-color");
    const body = document.querySelector("body");
    if (darkTheme) {
      body.classList.add("dark-theme");
      for (let i = 0; i < customText.length; i++) {
        customText[i].classList.add("dark-text");
      }
    } else {
      body.classList.remove("dark-theme");
      for (let i = 0; i < customText.length; i++) {
        customText[i].classList.remove("dark-text");
      }
    }
  };

  return (
    <AppContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
