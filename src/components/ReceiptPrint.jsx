import { forwardRef } from "react";
import { STORE_INFO } from "../config/store";

const ReceiptPrint = forwardRef(({ items, total, receiptNo, date }, ref) => {
  return (
    <div ref={ref} className="print-receipt">
      <h2>{STORE_INFO.name}</h2>
      <p>{STORE_INFO.address}</p>

      <hr />

      <p>Receipt: {receiptNo}</p>
      <p>Date: {date}</p>

      <hr />

      {items.map((item) => (
        <div key={item.id} className="row">
          <span>{item.description}</span>
          <span>{item.quantity} x {item.price}</span>
          <span>{item.total.toFixed(2)}</span>
        </div>
      ))}

      <hr />
      <h3>Total: ${total.toFixed(2)}</h3>

      <p className="center">Thank you!</p>
    </div>
  );
});

export default ReceiptPrint;
