import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Soy flavio y este es el body.</h1>
      <p>
        Soy un desarrollador PHP, aprendiendo REACT! Mi proposito es iniciar una
        carrera como desarrollador <code style={{ color: "red" }}>MERN</code>{" "}
        este mismo año!
      </p>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://redeardente.com/wp-content/uploads/2023/07/como-hashirama-morreu.webp"
      alt="Hashirama_avatar"
    />
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill skill="PHP" icon="🐘" color="blue" />
      <Skill skill="JavaScript" icon="🪐" color="orange" />
      <Skill skill="mySQL" icon="🦭" color="gray" />
      <Skill skill="GIT + GITHUB" icon="🐙" color="white" />
      <Skill skill="Docker" icon="🐳" color="cyan" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
