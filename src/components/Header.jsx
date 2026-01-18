import { STORE_INFO } from "../config/store";

export default function Header({ t }) {
  return (
    <header className="header">
      <img src="/riza-logo.png" alt="Riza-Modern Kitchen" className="logo" />
      <p className="address">{STORE_INFO.address}</p>
      <p className="phone">{STORE_INFO.phone}</p>
      <p className="tagline">{t?.receipt || "Invoice"}</p>
    </header>
  );
}
