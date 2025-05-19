import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../constant/route";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
     localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navigate = useNavigate()

  return (
    <header className="flex justify-between items-center h-[100px] px-7 shadow-lg bg-white dark:bg-gray-600 cursor-pointer">
      <span onClick={()=>navigate(routes.home)} className="font-bold text-3xl text-black dark:text-white">
        Where in the world?
      </span>
      <div
        onClick={toggleDarkMode}
        className="w-[60px] h-[30px] bg-slate-400 rounded-full relative cursor-pointer dark:bg-slate-100"
      >
        <span
          className={`w-[22px] h-[22px] bg-slate-900 rounded-full absolute top-[4px] transition-transform duration-300 ${
            darkMode ? "translate-x-[30px]" : "translate-x-0"
          }`}
        />
      </div>
    </header>
  );
};

export default Header;
