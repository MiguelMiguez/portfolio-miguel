import React from "react";
import "./Tech.css";
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaBootstrap, FaGitAlt, FaNodeJs, } from "react-icons/fa";
import { SiJavascript, SiOracle, SiSass, SiFirebase, SiVite, SiTailwindcss, SiPostgresql, SiTypescript, SiFigma } from "react-icons/si";

const skills = [
    { name: "React", icon: <FaReact color="#61dafb" /> },
    { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
    { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572b6" /> },
    { name: "SASS", icon: <SiSass color="#cc6699" /> },
    { name: "Bootstrap", icon: <FaBootstrap color="#7952b3" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss color="#06b6d4" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "Firebase", icon: <SiFirebase color="#ffca28" /> },
    { name: "ViteJS", icon: <SiVite color="#646cff" /> },
    { name: "SQL ORACLE", icon: <SiOracle color="#f80000" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
    { name: "Python", icon: <FaPython color="#3776ab" /> },
    { name: "GIT", icon: <FaGitAlt color="#f34f29" /> },
    { name: "Figma", icon: <SiFigma color="#a259ff" /> },
];

export default function Tech({ lang = "es" }) {
    const titles = {
        es: "Tecnologías",
        en: "Technologies",
    };

    return (
        <section className="tech-section" id="tecnologias">
            <h2 className="tech-title">{titles[lang]}</h2>
            <div className="tech-grid">
                {skills.map((skill) => (
                    <div className="tech-card" key={skill.name}>
                        <span className="tech-icon">{skill.icon}</span>
                        <span className="tech-label">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}