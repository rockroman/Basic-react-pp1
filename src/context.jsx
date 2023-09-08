import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem("myDarkTheme") === "true"
  );
  const toggleTheme = () => {
    const newDarkTheme = !darkTheme;
    setDarkTheme(newDarkTheme);
    localStorage.setItem("myDarkTheme", newDarkTheme);
    // const customText = document.querySelectorAll(".custom-color");
    // const body = document.querySelector("body");
    // if (darkTheme) {
    //   body.classList.add("dark-theme");
    //   for (let i = 0; i < customText.length; i++) {
    //     customText[i].classList.add("dark-text");
    //   }
    // } else {
    //   body.classList.remove("dark-theme");
    //   for (let i = 0; i < customText.length; i++) {
    //     customText[i].classList.remove("dark-text");
    //   }
    // }
  };
  useEffect(() => {
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
  }, [darkTheme]);
  console.log(localStorage.getItem("myDarkTheme"));
  return (
    <AppContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
