import React, { useState, useEffect } from "react";

const DragEnter = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      // console.log(e);
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      padding: 50,
      paddingTop: 60,
      height: 150,
      width: 150,
    },
  };
  const [cursorVariant, setCursorVariant] = useState("default");
  setCursorVariant("default");
  document.querySelector(".cursor").textContent = "";
};

export default DragEnter;
