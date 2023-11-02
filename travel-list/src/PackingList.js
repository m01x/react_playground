import { useState } from "react";
import { Item } from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  onPacked,
  onReset,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            onPacked={onPacked}
            key={item.id}
          />
        ))}
      </ul>
      <div
        className="actions"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <select>
          <option value="input">Filtra por orden</option>
          <option value="description">Filtra por descripcion</option>
          <option value="packed">Filtra por estado de empaque</option>
        </select>
        <button onClick={onReset}>Limpiar lista</button>
      </div>
    </div>
  );
}
