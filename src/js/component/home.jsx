import React, { useState } from "react";
import Counter from "./Counter";
import ChangingSize from "./ChangingSize";
// hooks son metodos para actualizar el dom virtual
// usa estado
// un valor va a ser cambiante, que tiene que actualizar el virtual dom cuando se modifique ese valor

/**
 *
 * let [valor, funcionDeActualizacion] = useState(valorInicial)
 * let [name, setName] = useState("Jose Carlos")
 *
 * const [img, setImg] = useState("https://lorem.picum./hjasdf;lkjasd")
 *
 */

const Home = () => {
  const pageTitle = "El titulo de mi pagina";
  // let counter = 0;
  // useState()
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    setTheme("light");
  };

  return (
    <div
      className={
        theme === "light" ? "container" : "bg-dark text-white container"
      }
    >
      <h1>{pageTitle}</h1>
      <button onClick={switchTheme}>
        <i class="fa-solid fa-moon"></i>
      </button>
      <hr />
      <p>Componente counter</p>
      <Counter />
      <hr />
      <ChangingSize />
    </div>
  );
};

export default Home;
