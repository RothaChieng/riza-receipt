const KEY = "riza_receipts";

export function saveReceipt(receipt) {
  const receipts = JSON.parse(localStorage.getItem(KEY)) || [];
  receipts.push(receipt);
  localStorage.setItem(KEY, JSON.stringify(receipts));
}

export function loadReceipts() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}
