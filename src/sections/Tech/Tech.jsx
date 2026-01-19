import React from "react";
import "./Tech.css";

const skills = [
    { name: "React", color: "#61dafb" },
    { name: "JavaScript", color: "#f7df1e" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "HTML", color: "#e34c26" },
    { name: "CSS", color: "#1572b6" },
    { name: "SASS", color: "#cc6699" },
    { name: "Bootstrap", color: "#7952b3" },
    { name: "TailwindCSS", color: "#06b6d4" },
    { name: "Node.js", color: "#339933" },
    { name: "Firebase", color: "#ffca28" },
    { name: "ViteJS", color: "#646cff" },
    { name: "SQL ORACLE", color: "#f80000" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Python", color: "#3776ab" },
    { name: "GIT", color: "#f34f29" },
    { name: "Figma", color: "#a259ff" },
];

export default function Tech({ lang = "es" }) {
    const titles = {
        es: "Tecnologías",
        en: "Technologies",
    };

    return (
        <section className="tech-section" id="tecnologias">
            <div className="tech-header">
                <span className="section-label">Skills</span>
                <h2 className="section-title">{titles[lang]}</h2>
            </div>
            <div className="tech-grid">
                {skills.map((skill) => (
                    <div
                        className="tech-card"
                        key={skill.name}
                        style={{ '--skill-color': skill.color }}
                    >
                        <div className="tech-indicator" />
                        <span className="tech-label">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}