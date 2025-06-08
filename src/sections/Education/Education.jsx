import React from "react";
import data from "../../data/education.json";
import "./Education.css";
import salir from "../../assets/salir.png";

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
            <h2 className="education-title">{sectionTitles[lang].education}</h2>
            <div className="education-main">
                {education.map((edu, idx) => (
                    <div className="education-block" key={idx}>
                        <h3 className="education-institution">
                            <b>
                                <a href={edu.url || "#"} target="_blank" rel="noopener noreferrer">
                                    {edu.institution}
                                </a>
                            </b>
                        </h3>
                        <div className="education-period">
                            {edu.startDate} - {edu.endDate}
                        </div>
                        <ul className="education-area">
                            <li>{edu.area}</li>
                        </ul>
                    </div>
                ))}
            </div>
            <h2 className="certifications-title">{sectionTitles[lang].certificates}</h2>
            <div className="certifications-grid">
                {certificates.map((cert, idx) => (
                    <div className="cert-card" key={idx}>
                        <div className="cert-header"> <a
                            href={cert.url || "#"}
                            className="cert-title"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#df691f", fontWeight: 700, fontSize: "1.2rem", textDecoration: "none" }}
                        >
                            {cert.name}
                        </a>
                            <img src={salir} alt="externo" className="ico-externo" />
                        </div>

                        <ul className="cert-info">
                            <li>{cert.institution}</li>
                        </ul>
                        <div className="cert-date">
                            <b>{cert.date}</b>
                        </div>
                    </div>
                ))}
                <div className="cert-cross" />
            </div>
        </section>
    );
}