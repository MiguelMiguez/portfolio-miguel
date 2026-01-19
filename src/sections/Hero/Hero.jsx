import React from "react";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import "./Hero.css";
import profile from "../../assets/profile.png";
import cvFile from "../../assets/CV Miguel Miguez.pdf";

const heroTexts = {
    es: {
        badge: "Desarrollador Front-End",
        description: "Desarrollador apasionado por crear experiencias web modernas, accesibles y de alto rendimiento.",
        downloadCV: "Descargar CV"
    },
    en: {
        badge: "Front-End Developer",
        description: "Passionate developer creating modern, accessible, and high-performance web experiences.",
        downloadCV: "Download CV"
    }
};

export default function Hero({ lang = "es" }) {
    const texts = heroTexts[lang];

    return (
        <section className="hero-section" id="inicio">
            <div className="hero-content">
                <div className="hero-info">
                    <div className="hero-badge">{texts.badge}</div>
                    <h1 className="hero-title">
                        <span className="hero-name-primary">Miguel</span>
                        <span className="hero-name-accent">Miguez</span>
                    </h1>
                    <p className="hero-description">
                        {texts.description}
                    </p>
                    <div className="hero-actions">
                        <a href={cvFile} className="hero-btn hero-btn-primary" download>
                            <Download size={18} />
                            {texts.downloadCV}
                        </a>
                        <div className="hero-socials">
                            <a
                                href="mailto:miguelmiguezangel@gmail.com"
                                className="hero-social-link"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                            <a
                                href="https://linkedin.com/in/miguelmiguez/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-social-link"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://github.com/MiguelMiguez"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-social-link"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-image-wrapper">
                        <img
                            src={profile}
                            alt="Miguel Miguez"
                            className="hero-img"
                        />
                        <div className="hero-image-ring"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}