import React, { useState, useEffect } from "react";
import scrollup1 from "./images/scrollup1.svg"

const ScrollUp = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <img
          onClick={scrollUp}
          className="scroll w-16 h-16 rounded-full fixed bottom-5 right-5 m-5 cursor-pointer opacity-90 transition-all duration-300 ease-in-out flex justify-center items-center hover:bg-slate-600 hover:transform hover:translate-y-[-5px] hover:opacity-100 p-2"
          src={scrollup1}
          alt="scroll up"
        />
      )}
    </>
  );
};

export default ScrollUp;
