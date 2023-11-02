export default function Stats({ items }) {
  const numItems = items.length;
  const numPackedItems = items.filter((i) => i.packed);
  const percentage = (numPackedItems.length * 100) / items.length;

  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Comienza a agregar items a tu lista 🎒🥾🚀</em>
      </footer>
    );

  return (
    <footer className="stats">
      <em>
        {numPackedItems.length === numItems
          ? "Ya has empacado toco, buen viaje! ✈️🌍"
          : `💼Tienes ${numItems} items en la lista, y has empacado 
          ${numPackedItems.length} (${percentage}%)`}
      </em>
    </footer>
  );
}
