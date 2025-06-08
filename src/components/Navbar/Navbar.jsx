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

  };

  return (
    <nav className="navbar">

      <div className="navbar-desktop">

        <div className="navbar-logo">
          <span className="navbar-logo-white">m</span>
          <span className="navbar-logo-orange">m</span>
        </div>

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


      <div className="navbar-mobile">

        <button
          className="navbar-burger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-burger-bar"></span>
          <span className="navbar-burger-bar"></span>
          <span className="navbar-burger-bar"></span>
        </button>


        <div
          className={`navbar-mobile-menu${menuOpen ? " open" : ""}`}
        >

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