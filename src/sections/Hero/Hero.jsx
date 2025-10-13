import React from "react";
import "./Hero.css";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import gmailIcon from "../../assets/gmail.png";
import fileIcon from "../../assets/fileIcon.png";
import profile from "../../assets/profile.png";
import cvFile from "../../assets/CV Miguel Miguez.pdf";

const sectionIds = ["inicio", "sobremi", "experiencia", "formacion", "proyectos"];

export default function Hero() {

    const [isAtLastSection, setIsAtLastSection] = React.useState(false);

    const handleScrollToNext = () => {

        const currentIdx = sectionIds.findIndex(id => {
            const el = document.getElementById(id);
            if (!el) return false;
            const rect = el.getBoundingClientRect();
            return rect.top >= -100 && rect.top < window.innerHeight / 2;
        });


        if (currentIdx === sectionIds.length - 1) {
            const firstSection = document.getElementById(sectionIds[0]);
            if (firstSection) {
                firstSection.scrollIntoView({ behavior: "smooth" });
            }
            setIsAtLastSection(false);
        } else {

            const nextIdx = currentIdx === -1 ? 1 : currentIdx + 1;
            const nextSection = document.getElementById(sectionIds[nextIdx]);
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
            }

            setIsAtLastSection(nextIdx === sectionIds.length - 1);
        }
    };


    React.useEffect(() => {
        const onScroll = () => {
            const proyectos = document.getElementById("proyectos");
            if (proyectos) {
                const rect = proyectos.getBoundingClientRect();
                const isVisible = rect.top >= -100 && rect.top < window.innerHeight / 2;
                setIsAtLastSection(isVisible);
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

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
                            <img src={gmailIcon} alt="Email" />
                        </a>
                        <a href="https://linkedin.com/in/miguelmiguez/" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="LinkedIn">
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/MiguelMiguez" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="GitHub">
                            <img src={githubIcon} alt="GitHub" />
                        </a>
                        <a href={cvFile} className="hero-cv-btn" download>
                            ️CV
                            <img src={fileIcon} alt="File" className="hero-icon" />
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
        </section>
    );
}