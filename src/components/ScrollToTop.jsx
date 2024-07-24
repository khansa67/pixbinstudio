import React from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-to-top" onClick={scrollToTop}>
      <div className="div-2">
        <FaArrowUp />
      </div>
    </div>
  );
};

export default ScrollToTop;
