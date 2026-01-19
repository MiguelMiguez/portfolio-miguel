import React from "react";
import { Mail, Linkedin, Github, Heart } from "lucide-react";
import "./Footer.css";

const footerTexts = {
    es: {
        tagline: "Desarrollador Front-End",
        madeWith: "Hecho con",
        location: "en Argentina"
    },
    en: {
        tagline: "Front-End Developer",
        madeWith: "Made with",
        location: "in Argentina"
    }
};

export default function Footer({ lang = "es" }) {
    const texts = footerTexts[lang];

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <span className="logo-primary">m</span>
                        <span className="logo-accent">m</span>
                    </div>
                    <p className="footer-tagline">{texts.tagline}</p>
                </div>

                <div className="footer-links">
                    <a href="mailto:miguelmiguezangel@gmail.com" className="footer-link">
                        <Mail size={18} />
                        miguelmiguezangel@gmail.com
                    </a>
                </div>

                <div className="footer-social">
                    <a
                        href="https://github.com/MiguelMiguez"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://linkedin.com/in/miguelmiguez/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Miguel Miguez. {texts.madeWith}
                    <Heart size={14} className="heart-icon" />
                    {texts.location}
                </p>
            </div>
        </footer>
    );
}