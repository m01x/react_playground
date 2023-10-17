import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//Siempre este componente con mayuscula en la A
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  const style = {};
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1 style={style}>Pizzeria del m01x</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  const anyPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Nuestro menú 🎴</h2>

      {/*Recorremos el arreglo pizzaData usando map() para mostrarlo de forma dinamica*/}
      {anyPizza > 0 ? (
        <>
          {/**Esto es un Fragmento Reacto, lo estoy usando para devolver 2 root elements (<P> y <ul>) en el componente Menu */}
          <p>
            Autentica cocina Italiana. 6 recetas creativas para escoger. Todas
            de nuestro horno de piedra, todo organico, todo delicioso.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObjeto={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          Estamos trabajando en nuestro menú, por favor regrese en los
          horarios.😥
        </p>
      )}

      {/* <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach and ricotta cheese"
        price={12}
        photoName="pizzas/spinaci.jpg"
  /> */}
    </main>
  );
};

function Pizza({ pizzaObjeto }) {
  //if (pizzaObjeto.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObjeto.soldOut ? "sold-out" : ""}`}>
      {/**Para definir esta condicion ternaria, estamos utilizando Template literals con las ``*/}
      <img src={pizzaObjeto.photoName} alt={pizzaObjeto.name}></img>
      <div>
        <h3>{pizzaObjeto.name}</h3>
        <p>{pizzaObjeto.ingredients}</p>
        {/* {pizzaObjeto.soldOut ? (
          <span>"AGOTADO!"</span>
        ) : (
          <span>pizzaObjeto.price</span>
        )} */}
        <span>{pizzaObjeto.soldOut ? "AGOTADO!" : pizzaObjeto.price}</span>
      </div>
    </li>
  );
}
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour)
  //   alert("Abierto: Estamos atendiendo!");
  // else alert("Cerrado: No estamos atendiendo.");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <div className="order">
          <p>
            Estaremos encantados de atenderle entre las {openHour}:00 y las{" "}
            {closeHour}:00
          </p>
        </div>
      )}
    </footer>
  );
};

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        Estamos atendiendo desde las {openHour}:00 hasta las {closeHour}:00
        hrs!.
      </p>
      <button className="btn">Ordenar!</button>
    </div>
  );
}

//React v18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React antes de la v. 18
//React.render(<App />, document.getElementById("root"));
