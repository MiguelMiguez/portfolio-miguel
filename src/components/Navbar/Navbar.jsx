import React, { useState } from "react";
import "./Navbar.css";
import LangSwitcher from "../LangSwitcher/LangSwitcher";

const navLinksData = {
  es: [
    { id: "inicio", label: "inicio" },
    { id: "sobremi", label: "sobre mi" },
    { id: "experiencia", label: "experiencia" },
    { id: "formacion", label: "formación" },
    { id: "proyectos", label: "proyectos" },
    { id: "tecnologias", label: "tecnologias" }
  ],
  en: [
    { id: "inicio", label: "home" },
    { id: "sobremi", label: "about me" },
    { id: "experiencia", label: "experience" },
    { id: "formacion", label: "education" },
    { id: "proyectos", label: "projects" },
    { id: "tecnologias", label: "technologies" }
  ],
};

export default function Navbar({ lang, onLangChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = navLinksData[lang];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
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
          <LangSwitcher lang={lang} onChange={onLangChange} />
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

            <LangSwitcher lang={lang} onChange={onLangChange} />
          </div>
        </div>
      </div>
    </nav>
  );
}