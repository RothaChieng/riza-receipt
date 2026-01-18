import { useState } from "react";

export default function ReceiptForm({ onAdd, t }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !price) return;

    onAdd({
      description,
      quantity: Number(quantity),
      price: Number(price),
    });

    setDescription("");
    setQuantity(1);
    setPrice("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder={t?.itemDescription || "Item description"}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        aria-label={t?.itemDescription || "Item description"}
        required
      />
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        aria-label={t?.quantity || "Quantity"}
        title={t?.quantity || "Quantity"}
        required
      />
      <input
        type="number"
        min="0"
        step="0.01"
        placeholder={t?.price || "Price"}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        aria-label={t?.price || "Price"}
        required
      />
      <button type="submit">{t?.add || "Add"}</button>
    </form>
  );
}