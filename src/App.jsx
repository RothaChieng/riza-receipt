import { useState, useRef } from "react";
import Header from "./components/Header";
import ReceiptForm from "./components/ReceiptForm";
import ReceiptTable from "./components/ReceiptTable";
import ReceiptSummary from "./components/ReceiptSummary";
import ReceiptPrint from "./components/ReceiptPrint";
import { createReceiptItem } from "./models/receiptItem";
import { useTheme } from "./hooks/useTheme";
import { LANG } from "./i18n/lang";
import "./style/main.css";

function App() {
  const [items, setItems] = useState([]);
  const [lang, setLang] = useState("en");
  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0];
  const [invoiceDate, setInvoiceDate] = useState(formattedToday);
  const printRef = useRef();
  const { toggle } = useTheme();

  const t = LANG[lang];
  
  // Format date as DD-MM-YYYY for display
  const formatDateForDisplay = (dateStr) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    return `${day}-${month}-${year}`;
  };

  const addItem = (item) => {
    setItems([...items, createReceiptItem(item)]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const clearAll = () => {
    if (items.length > 0 && window.confirm(t?.clearAll ? `${t.clearAll}?` : "Clear all items?")) {
      setItems([]);
    }
  };

  const handlePrint = () => {
    if (printRef.current) {
      window.print();
    }
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const receiptNo = `R${Date.now().toString().slice(-6)}`;
  const date = new Date().toLocaleDateString();

  return (
    <div className="app">
      {/* Main UI */}
      <Header t={t} />
      <ReceiptForm onAdd={addItem} t={t} />
      <ReceiptTable items={items} onRemove={removeItem} t={t} />
      
      {items.length > 0 && (
        <div className="clear-all-container">
          <button onClick={clearAll} className="clear-all-btn">
            🗑️ {t?.clearAll || "Clear All"}
          </button>
        </div>
      )}
      
      <div className="summary-section">
        <ReceiptSummary items={items} t={t} />
        
        {/* ABA Payment Logo */}
        <div className="payment-logo">
          <img src="/aba.jpg" alt="ABA Payment" />
        </div>
        
        {/* Date Input */}
        <div className="date-input-container">
          <label htmlFor="invoice-date">{t?.date || "Date"}: </label>
          <input 
            type="date" 
            id="invoice-date"
            value={invoiceDate} 
            onChange={(e) => setInvoiceDate(e.target.value)}
            className="date-input"
          />
          <span className="date-display">{formatDateForDisplay(invoiceDate)}</span>
        </div>
        
        {/* Invoice Notice */}
        <p className="invoice-notice">
          {t?.invoiceNotice || "This Invoice is Computer Generated, No stamp is needed."}
        </p>
      </div>

      {/* ✅ ACTION BAR — PUT IT HERE */}
      <div className="actions">
        <button onClick={() => setLang(lang === "en" ? "km" : "en")}>
          🇰🇭 / 🇺🇸
        </button>

        <button onClick={toggle}>🌙 Dark Mode</button>
        <button onClick={handlePrint}>🧾 Print</button>
      </div>

      {/* ❌ NOT VISIBLE — PRINT ONLY */}
      <div style={{ display: "none" }}>
        <ReceiptPrint
          ref={printRef}
          items={items}
          total={subtotal}
          receiptNo={receiptNo}
          date={date}
        />
      </div>
    </div>
  );
}

export default App;
