import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const navLinksData = {
  es: [
    { id: "inicio", label: "inicio" },
    { id: "sobremi", label: "sobre mi" },
    { id: "experiencia", label: "experiencia" },
    { id: "formacion", label: "formación" },
    { id: "proyectos", label: "proyectos" },
    { id: "tecnologias", label: "tecnologías" }
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
          <span className="navbar-logo-white">M</span>
          <span className="navbar-logo-white">M</span>
          <span className="navbar-logo-accent">.</span>
        </div>

        <div className="navbar-links-pill">
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

        <div className="navbar-actions">
          <ThemeToggle />
          <LangSwitcher lang={lang} onChange={onLangChange} />
        </div>
      </div>

      <div className="navbar-mobile">
        <button
          className="navbar-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        <div className={`navbar-mobile-overlay${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(false)} />

        <div className={`navbar-mobile-menu${menuOpen ? " open" : ""}`}>
          <button
            className="navbar-mobile-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
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
          </div>

          <div className="navbar-mobile-actions">
            <ThemeToggle />
            <LangSwitcher lang={lang} onChange={onLangChange} />
          </div>
        </div>
      </div>
    </nav>
  );
}