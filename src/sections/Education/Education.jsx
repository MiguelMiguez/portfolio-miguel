import React from "react";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import data from "../../data/education.json";
import "./Education.css";

const sectionTitles = {
    es: {
        education: "Formación",
        certificates: "Certificaciones"
    },
    en: {
        education: "Education",
        certificates: "Certificates"
    }
};

export default function Education({ lang }) {
    const education = data[lang]?.education || [];
    const certificates = data[lang]?.certificates || [];

    return (
        <section className="education-section" id="formacion">
            <div className="education-header">
                <span className="section-label">Aprendizaje</span>
                <h2 className="section-title">{sectionTitles[lang].education}</h2>
            </div>

            <div className="education-grid">
                {education.map((edu, idx) => (
                    <div className="education-card" key={idx}>
                        <div className="education-card-icon">
                            <GraduationCap size={24} />
                        </div>
                        <div className="education-card-content">
                            <h3 className="education-institution">
                                <a href={edu.url || "#"} target="_blank" rel="noopener noreferrer">
                                    {edu.institution}
                                    <ExternalLink size={14} />
                                </a>
                            </h3>
                            <span className="education-period">
                                {edu.startDate} — {edu.endDate}
                            </span>
                            <p className="education-area">{edu.area}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="certificates-header">
                <h2 className="section-title">{sectionTitles[lang].certificates}</h2>
            </div>

            <div className="certificates-grid">
                {certificates.map((cert, idx) => (
                    <a
                        href={cert.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-card"
                        key={idx}
                    >
                        <div className="certificate-icon">
                            <Award size={20} />
                        </div>
                        <div className="certificate-content">
                            <h3 className="certificate-name">{cert.name}</h3>
                            <span className="certificate-issuer">{cert.institution}</span>
                            <span className="certificate-date">{cert.date}</span>
                        </div>
                        <ExternalLink size={16} className="certificate-link-icon" />
                    </a>
                ))}
            </div>
        </section>
    );
}