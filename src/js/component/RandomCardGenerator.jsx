import React from "react";

const RandomCardGenerator = () => {
  let cartas = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let pintas = ["♦", "♥", "♠", "♣"];

  const getRandomElement = (array) => {
    console.log(array);
    return array[Math.floor(Math.random() * array.length)];
  };
  let currentCard = getRandomElement(cartas);
  let pinta = getRandomElement(pintas);
  let color = pinta === "♦" || pinta === "♥" ? "text-danger" : "text-black";
  return (
    <div>
      <div className="card poker-card d-flex flex-col justify-content-between">
        <p className={color}>{pinta}</p>
        <div className={color}>{currentCard}</div>
        <p className={color}>{pinta}</p>
      </div>
    </div>
  );
};
export default RandomCardGenerator;
