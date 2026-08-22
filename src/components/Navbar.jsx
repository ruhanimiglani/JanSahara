import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          🛡️ JanSahara
        </Link>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={menuOpen ? "nav-links show" : "nav-links"}>
          <Link to="/">Home</Link>
          <Link to="/women">Women</Link>
          <Link to="/men">Men</Link>
          <Link to="/children">Children</Link>
          <Link to="/mental-health">Mental Health</Link>
          <Link to="/helplines">Helplines</Link>
        </div>

        <Link to="/sos" className="sos-nav">
          🚨 SOS
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;