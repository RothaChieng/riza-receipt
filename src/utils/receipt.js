export function generateReceiptNumber() {
  return `RMK-${Date.now()}`;
}

export function getTodayDate() {
  return new Date().toLocaleDateString();
}
