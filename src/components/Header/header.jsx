import logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header-logo" />
      <h1 className="header-title">TP1 - Profil du stagiaire</h1>
    </header>
  );
}

export default Header;
