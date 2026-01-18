// src/models/receiptItem.js

export function createReceiptItem({ description, quantity, price }) {
  return {
    id: crypto.randomUUID(),
    description: description.trim(),
    quantity: Number(quantity),
    price: Number(price),
    total: Number(quantity) * Number(price),
  };
}
