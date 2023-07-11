import React, { useState } from "react";

const Counter = () => {
  // const [variable, setVariable] = useState(valorInicial)
  const [counter, setCounter] = useState(0);

  function addNumber() {
    let result = counter + 1;
    setCounter(result);
  }

  function substractNumber() {
    let result = counter - 1;
    setCounter(result);
  }

  return (
    <div className="mx-5 d-flex gap-3 align-items-center">
      <button onClick={() => substractNumber()}>-</button>
      <p className="m-0">{counter}</p>
      <button onClick={() => addNumber()}>+</button>
    </div>
  );
};

export default Counter;
