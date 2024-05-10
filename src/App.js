import { evaluate } from "mathjs";
import { useState } from "react";
import "./App.css";
import Boton from "./components/Boton";
import BotonClear from "./components/BotonClear";
import Pantalla from "./components/Pantalla";
import freCodeCampLogo from "./img/freecodecamp-logo.svg";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calculaResultado = () => {
    try {
      // Limpiar la entrada para eliminar espacios u otros caracteres no deseados
      const resultado = evaluate(input.replace(/\s+/g, ""));
      setInput(resultado.toString()); // Asegurarse de que el resultado se convierte a string si es necesario
    } catch (error) {
      console.error("Error al evaluar la expresión:", error);
      // Opcional: Mostrar un mensaje al usuario o simplemente no actualizar el input
      setInput("Error"); // Así el usuario sabe que hubo un error
    }
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <h4 className="titulo-logo"> FreeCodeCamp</h4>
        <img
          src={freCodeCampLogo}
          className="freecodecamp-logo"
          alt="logo de freeCodeCamp"
        />
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
