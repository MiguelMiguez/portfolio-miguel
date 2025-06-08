import React from "react";
import data from "../../data/education.json";
import "./Education.css";

export default function Education() {
    const education = data.education || [];
    const certificates = [
        {
            name: "React.js",
            url: "https://www.coderhouse.com/ar/certificados/65ca4e5a82e04116c658a944?lang=es",
            institution: "CoderHouse",
            date: "Febrero 2024",
        },
        {
            name: "JavaScript",
            url: "https://coderhouse.com/ar/certificados/6538126ad670f7837198332f?lang=es",
            institution: "CoderHouse",
            date: "Octubre 2023",
        },
        {
            name: "HTML - CSS",
            url: "https://www.coderhouse.com/ar/certificados/64d4eb5c19aad62f906bf3e7?lang=es",
            institution: "CoderHouse",
            date: "Agosto 2023",
        },
        {
            name: "CCNA",
            url: "",
            institution: "Fundacion Proydesa",
            date: "Enero 2018",
        },
    ];

    return (
        <section className="education-section" id="formacion">
            <h2 className="education-title">Formacion</h2>
            <div className="education-main">
                <div className="education-block">
                    <h3 className="education-institution">
                        <b>
                            <a href={education[0].url} target="_blank" rel="noopener noreferrer">
                                {education[0].institution}
                            </a>
                        </b>
                    </h3>
                    <div className="education-period">
                        {education[0].startDate} - {education[0].endDate}
                    </div>
                    <ul className="education-area">
                        <li>{education[0].area}</li>
                    </ul>
                </div>
            </div>
            <h2 className="certifications-title">Certificaciones</h2>
            <div className="certifications-grid">
                {certificates.map((cert, idx) => (
                    <div className="cert-card" key={idx}>
                        <a
                            href={cert.url || "#"}
                            className="cert-title"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#df691f", fontWeight: 700, fontSize: "1.2rem", textDecoration: "none" }}
                        >
                            {cert.name}
                        </a>
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