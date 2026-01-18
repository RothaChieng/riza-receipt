export default function ReceiptSummary({ items, t }) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="summary">
      <h3>{t?.subtotal || "Subtotal"}: ${subtotal.toFixed(2)}</h3>
      <h2>{t?.total || "Total"}: ${subtotal.toFixed(2)}</h2>
    </div>
  );
}
