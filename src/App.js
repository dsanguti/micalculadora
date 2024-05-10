import { evaluate } from "mathjs";
import { useState } from "react";
import "./App.css";
import Boton from "./components/Boton";
import BotonClear from "./components/BotonClear";
import Logo from "./components/Logo";
import Pantalla from "./components/Pantalla";

function App() {
  const operadores = ["+", "-", "*", "/"];

  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const agregarInput = (val) => {
    if (
      operadores.includes(val) &&
      (input === "" || operadores.includes(input.slice(-1)))
    ) {
      setError("No se puede introducir dos operadores consecutivos.");
    } else {
      setInput(input + val);
      setError(""); // Limpiar el error si todo está bien
    }
  };

  const calculaResultado = () => {
    try {
      const resultado = evaluate(input);
      setInput(resultado.toString());
      setError(""); // Limpiar el error si la evaluación fue exitosa
    } catch (error) {
      setError("Operación no válida");
      setInput("");
    }
  };

  return (
    <div className="App">
      <Logo />
      <div className={`error-message ${error ? 'show' : ''}`}>
        {error}
      </div>
     
      <div className="contenedor-calculadora">
        <Pantalla input={input} />

        <div className="fila">
          <Boton manejarClic={agregarInput}> 1 </Boton>
          <Boton manejarClic={agregarInput}> 2 </Boton>
          <Boton manejarClic={agregarInput}> 3 </Boton>
          <Boton manejarClic={agregarInput}> + </Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}> 4 </Boton>
          <Boton manejarClic={agregarInput}> 5 </Boton>
          <Boton manejarClic={agregarInput}> 6 </Boton>
          <Boton manejarClic={agregarInput}> - </Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}> 7 </Boton>
          <Boton manejarClic={agregarInput}> 8 </Boton>
          <Boton manejarClic={agregarInput}> 9 </Boton>
          <Boton manejarClic={agregarInput}> * </Boton>
        </div>

        <div className="fila">
          <Boton manejarClic={calculaResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
