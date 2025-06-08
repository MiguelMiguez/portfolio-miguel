import React, { useState } from "react";
import "./Navbar.css";

const navLinks = [
  { id: "inicio", label: "inicio" },
  { id: "sobremi", label: "sobre mi" },
  { id: "experiencia", label: "experiencia" },
  { id: "formacion", label: "formación" },
  { id: "proyectos", label: "proyectos" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("es");

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLangChange = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
    // Aquí puedes agregar lógica para cambiar el idioma global de la app
  };

  return (
    <nav className="navbar">
      {/* Desktop Navbar */}
      <div className="navbar-desktop">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="navbar-logo-white">m</span>
          <span className="navbar-logo-orange">m</span>
        </div>
        {/* Links */}
        <div className="navbar-links-bg">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleLinkClick(e, id)}
              className="navbar-link"
            >
              {label}
            </a>
          ))}
        </div>
        {/* Idioma */}
        <div>
          <button className="navbar-lang-btn" onClick={handleLangChange}>
            {lang === "es" ? "Es" : "En"}
            <img
              src={
                lang === "es"
                  ? "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
                  : "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
              }
              alt={lang === "es" ? "Argentina" : "USA"}
              className="navbar-lang-flag"
            />
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="navbar-mobile">
        {/* Burger Button */}
        <button
          className="navbar-burger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-burger-bar"></span>
          <span className="navbar-burger-bar"></span>
          <span className="navbar-burger-bar"></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`navbar-mobile-menu${menuOpen ? " open" : ""}`}
        >
          {/* Cerrar */}
          <button
            className="navbar-mobile-close"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
          <div className="navbar-mobile-links">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleLinkClick(e, id)}
                className="navbar-mobile-link"
              >
                {label}
              </a>
            ))}
            {/* Idioma (Mobile) */}
            <button
              className="navbar-lang-btn navbar-mobile-lang"
              onClick={handleLangChange}
            >
              {lang === "es" ? "Es" : "En"}
              <img
                src={
                  lang === "es"
                    ? "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
                    : "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                }
                alt={lang === "es" ? "Argentina" : "USA"}
                className="navbar-lang-flag"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}