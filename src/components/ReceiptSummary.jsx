export default function ReceiptSummary({ items, deposit, onDepositChange, t }) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const total = subtotal - deposit;

  return (
    <div className="summary">
      <div className="summary-row">
        <span className="summary-label">{t?.subtotal || "Subtotal"}:</span>
        <span className="summary-value">${subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-row deposit-field">
        <span className="summary-label deposit-label">{t?.deposit || "Deposit"}:</span>
        <span className="summary-value deposit-label">${deposit.toFixed(2)}</span>
        <input
          type="number"
          id="deposit"
          className="deposit-input"
          value={deposit}
          onChange={(e) => onDepositChange(Number(e.target.value) || 0)}
          min="0"
          step="0.01"
          placeholder="0.00"
        />
      </div>
      <div className="summary-row total-row">
        <span className="summary-label">{t?.total || "Total"}:</span>
        <span className="summary-value">${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
