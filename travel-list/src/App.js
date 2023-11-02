import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Pasaporte", quantity: 2, packed: false },
  { id: 2, description: "Calcetines", quantity: 12, packed: false },
  { id: 3, description: "Toalla", quantity: 12, packed: false },
  { id: 4, description: "Cargador", quantity: 12, packed: false },
  { id: 5, description: "Botas", quantity: 12, packed: false },
];

export default function App() {
  const [items, setitems] = useState(initialItems);
  function handleAddItems(item) {
    setitems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setitems((items) => items.filter((iteeem) => iteeem.id !== id));
  }

  function handlePacked(id) {
    setitems((items) =>
      items.map((i) => (id === i.id ? { ...i, packed: !i.packed } : i))
    );
  }

  function handleReset() {
    const alerta = window.confirm("Esta seguro/a de eliminar la lista?");
    if (alerta) setitems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onPacked={handlePacked}
        onReset={handleReset}
      />
      <Stats items={items} />
    </div>
  );
}
