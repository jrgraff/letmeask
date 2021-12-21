import { useEffect, useState } from "react";
import { Input } from "./styles"

export default function ThemeSwitch() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("letmeask-darkMode")) {
      activeDarkMode();
    }
  }, [isDarkModeActive]);

  function activeDarkMode() {
    document.getElementsByTagName("html")[0].classList.add("dark-mode");
    localStorage.setItem("letmeask-darkMode", "true");
    setIsDarkModeActive(true);
  }

  function deactivateDarkMode() {
    document.getElementsByTagName("html")[0].classList.remove("dark-mode");
    localStorage.removeItem("letmeask-darkMode");
    setIsDarkModeActive(false);
  }

  function darkModeController() {
    isDarkModeActive ? deactivateDarkMode() : activeDarkMode();
  }
  return (
      <Input type="checkbox" checked={isDarkModeActive} onChange={darkModeController} />
  )
}