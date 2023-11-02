import { useState } from "react";

export default function Form({ onAddItems }) {
  const [descripcion, setDescripcion] = useState("");
  const [cantidad, setCantidad] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!descripcion) return;
    const newItem = {
      id: Date.now(),
      description: descripcion,
      quantity: cantidad,
      packed: false,
    };
    onAddItems(newItem);

    setCantidad("");
    setDescripcion("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Que necesitas para tu viaje?🥰</h3>
      <select
        value={cantidad}
        onChange={(e) => setCantidad(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Ingresa un elemento..."
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <button>Agregar</button>
    </form>
  );
}
