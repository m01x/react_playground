import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}
function Steps() {
  /**Vamos a Crear los poderosos estados
  La formula es la siguiente.
  const [estado,funcion_pa_modificarlo] = useState(valor por defecto del estado);
  */

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  //const [test, setTest] = useState({ name: "Jonas" });

  function funcion_anterior() {
    if (step > 1) setStep((currentState) => currentState - 1);
  }

  function funcion_siguiente() {
    if (step < 3) {
      setStep((currentState) => currentState + 1);
    }
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            {" "}
            Holo!!, paso {step} : {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={funcion_anterior}
            >
              Anterior
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={funcion_siguiente}
            >
              Siguiente
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
