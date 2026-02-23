import React, { useState } from "react";
import { Briefcase, ExternalLink } from "lucide-react";
import experienciaData from "../../data/experiencia.json";
import "./Experiencie.css";

const sectionTitles = {
  es: {
    label: "Trayectoria",
    title: "Experiencia"
  },
  en: {
    label: "Journey",
    title: "Experience"
  }
};

export default function Experiencie({ lang }) {
  const experiencia = experienciaData[lang];
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="experience-section" id="experiencia">
      <div className="experience-header">
        <span className="section-label">{sectionTitles[lang].label}</span>
        <h2 className="section-title">{sectionTitles[lang].title}</h2>
      </div>

      <div className="experience-container">
        <div className="experience-timeline">
          {experiencia.map((exp, idx) => (
            <button
              key={idx}
              className={`timeline-item${activeIdx === idx ? " active" : ""}`}
              onClick={() => setActiveIdx(idx)}
            >
              <div className="timeline-dot">
                <Briefcase size={14} />
              </div>
              <div className="timeline-info">
                <span className="timeline-company">{exp.name}</span>
                <span className="timeline-year">{exp.startDate}</span>
              </div>
            </button>
          ))}
          <div className="timeline-line" />
        </div>

        <div className="experience-details">
          <div className="experience-card" key={activeIdx}>
            <div className="experience-card-header">
              <h3 className="experience-company">
                <a href={experiencia[activeIdx].url} target="_blank" rel="noopener noreferrer">
                  {experiencia[activeIdx].name}
                  <ExternalLink size={16} />
                </a>
              </h3>
              <span className="experience-period">
                {experiencia[activeIdx].startDate} — {experiencia[activeIdx].endDate}
              </span>
            </div>
            <p className="experience-position">{experiencia[activeIdx].position}</p>
            <ul className="experience-summary">
              {experiencia[activeIdx].summary?.slice(0, 4).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}