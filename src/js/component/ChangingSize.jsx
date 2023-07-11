import React, { useState } from "react";

const colors = [
  "text-black",
  "text-danger",
  "text-warning",
  "text-primary",
  "text-success",
];

const ChangingSize = () => {
  const [fontSize, setFontSize] = useState("fs-6");
  const [fontColor, setFontColor] = useState("text-black");
  const changeFontSize = (fs) => {
    setFontSize(fs);
  };

  const randomColor = () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    setFontColor(color);
  };

  return (
    <div className="my-3">
      <p className={fontSize}>
        <span className={fontColor}>Tamaño cambiante</span>
      </p>
      <div className="d-flex flex-wrap gap-2">
        <button
          className="btn btn-primary"
          onClick={() => changeFontSize("fs-6")}
        >
          Font xs
        </button>
        <button
          className="btn btn-primary"
          onClick={() => changeFontSize("fs-5")}
        >
          Font sm
        </button>
        <button
          className="btn btn-primary"
          onClick={() => changeFontSize("fs-4")}
        >
          Font md
        </button>
        <button
          className="btn btn-primary"
          onClick={() => changeFontSize("fs-3")}
        >
          Font lg
        </button>
        <button
          className="btn btn-primary"
          onClick={() => changeFontSize("fs-2")}
        >
          Font xl
        </button>
        <button
          className="btn btn-primary"
          onClick={() => changeFontSize("fs-1")}
        >
          Font 2xl
        </button>
      </div>
      <button className="btn btn-success mt-2" onClick={() => randomColor()}>
        Cambia el color
      </button>
    </div>
  );
};

export default ChangingSize;
