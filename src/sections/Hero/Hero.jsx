import React from "react";
import "./Hero.css";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import gmailIcon from "../../assets/gmail.png";
import profile from "../../assets/profile.png";

// IDs de las secciones en orden
const sectionIds = ["inicio", "sobremi", "experiencia", "formacion", "proyectos", "contacto"];

export default function Hero() {
    // Guarda el índice actual en un ref para evitar reinicio en cada render
    const currentSectionRef = React.useRef(0);

    const handleScrollToNext = () => {
        // Busca la sección visible actualmente
        const currentIdx = sectionIds.findIndex(id => {
            const el = document.getElementById(id);
            if (!el) return false;
            const rect = el.getBoundingClientRect();
            // Considera visible si la parte superior está cerca del top de la ventana
            return rect.top >= -100 && rect.top < window.innerHeight / 2;
        });
        // Calcula el siguiente índice (cíclico)
        const nextIdx = currentIdx === -1
            ? 1
            : (currentIdx + 1) % sectionIds.length;
        const nextSection = document.getElementById(sectionIds[nextIdx]);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
        currentSectionRef.current = nextIdx;
    };

    return (
        <section className="hero-section" id="inicio">
            <div className="hero-content">
                <div className="hero-info">
                    <h1>
                        <span className="hero-name-white">Miguel</span>
                        <br />
                        <span className="hero-name-orange">Miguez</span>
                    </h1>
                    <div className="hero-role">
                        <span className="hero-role-line"></span>
                        <span className="hero-role-text">Front-End developer</span>
                    </div>
                    <div className="hero-socials">
                        <a href="mailto:miguelmiguezangel@gmail.com" className="hero-social-icon" aria-label="Email">
                            <img src={gmailIcon} alt="Email" className="hero-icon" />
                        </a>
                        <a href="https://linkedin.com/in/miguelmiguez/" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="LinkedIn">
                            <img src={linkedinIcon} alt="LinkedIn" className="hero-icon" />
                        </a>
                        <a href="https://github.com/MiguelMiguez" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="GitHub">
                            <img src={githubIcon} alt="GitHub" className="hero-icon" />
                        </a>
                        <a href="/cv.pdf" className="hero-cv-btn" download>
                            CV <span className="hero-cv-arrow">↓</span>
                        </a>
                    </div>
                </div>
                <div className="hero-photo">
                    <img
                        src={profile}
                        alt="Miguel Miguez"
                        className="hero-img"
                    />
                </div>
            </div>
            {/* Call to action fijo abajo */}
            <button
                className="hero-next-btn"
                onClick={handleScrollToNext}
                aria-label="Ir a la siguiente sección"
            >
                ↓
            </button>
        </section>
    );
}