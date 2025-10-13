import React from "react";
import "./Footer.css";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import gmailIcon from "../../assets/gmail.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content footer-centered-layout">
                <div className="footer-logo">
                    <span className="footer-logo-white big-mm">m</span>
                    <span className="footer-logo-orange big-mm">m</span>
                </div>
                <div className="footer-contact-center">
                    <a href="mailto:miguelmiguezangel@gmail.com" className="footer-email">
                        miguelmiguezangel@gmail.com
                    </a>
                </div>
                <div className="footer-social">
                    <a href="https://github.com/MiguelMiguez" target="_blank" rel="noopener noreferrer" className="footer-icon-link" aria-label="GitHub">
                        <img src={githubIcon} alt="GitHub" />
                    </a>
                    <a href="https://linkedin.com/in/miguelmiguez/" target="_blank" rel="noopener noreferrer" className="footer-icon-link" aria-label="LinkedIn">
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                </div>
            </div>
            <div className="footer-copy">
                © {new Date().getFullYear()} Miguel Miguez. Todos los derechos reservados.
            </div>
        </footer>
    );
}