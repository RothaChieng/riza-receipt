export default function ReceiptTable({ items, onRemove, t }) {
  if (items.length === 0) {
    return <p className="empty-message">{t?.emptyMessage || "No items added yet. Start by adding items above."}</p>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>{t?.item || "Item"}</th>
          <th>{t?.qty || "Qty"}</th>
          <th>{t?.price || "Price"}</th>
          <th>{t?.total || "Total"}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.description}</td>
            <td>{item.quantity}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>${(item.quantity * item.price).toFixed(2)}</td>
            <td>
              <button onClick={() => onRemove(item.id)} aria-label="Remove item">✕</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
