import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
//import App from "./App";
import StarRating from "./StarRating";
import { useState } from "react";

/*Ejemplo de usar un componente reutilizable, pero queremos reflejar su informacion o estados
 fuera del mismo, por ejemplo en algun texto fuera del componente... veamos la clase 119
creamos un componente, que utilizara el componente de las estrellitas... pero queremos que DIGA cuantas estrellas
fueron seleccionadas... no tiene forma de saberlo, porque ls estados no suben a un padre.

Pero si habilitamos el componente padre con un estado, se lo pasamos al hijo, estepuede actualizarlo en base a su propio estado..
*/

function Test() {
  //vamos a realizar el ejemplo del comentario anterior.
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} externalRating={setMovieRating} />
      <p>Esta pelicula fue rankeada con {movieRating} estrellas</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={10}
      messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={3} />
    <Test />
  </React.StrictMode>
);
