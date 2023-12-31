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
          <StepMessage step={step}>
            {messages[step - 1]}
            <Button
              bgColor="#e7e7e7"
              color="#333"
              onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
            >
              Aprende como 💡
            </Button>
          </StepMessage>
          <div className="buttons">
            <Button color="#fff" bgColor="#7950f2" onClick={funcion_anterior}>
              <span>🔙</span> Anterior
            </Button>
            <Button
              color="#fff"
              bgColor="#7950f2"
              onClick={funcion_siguiente}
              text="Siguiente!"
              emoji="👉"
            >
              {" "}
              Siguiente <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Paso {step}</h3>
      {children}
    </div>
  );
}

function Button({ color, bgColor, onClick, children }) {
  //Esto es M U Y importante, child props
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
