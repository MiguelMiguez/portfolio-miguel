import React, { useState } from "react";
import experienciaData from "../../data/experiencia.json";
import "./Experiencie.css";

const sectionTitles = {
  es: "Experiencia",
  en: "Experience"
};

export default function Experiencie({ lang }) {
  const experiencia = experienciaData[lang];
  const [activeIdx, setActiveIdx] = useState(0);
  const isMobile = window.innerWidth <= 900;

  const handleScrollTo = (idx) => {
    setActiveIdx(idx);
  };

  return (
    <section className="experiencie-section" id="experiencia">
      <h2 className="experiencie-title">{sectionTitles[lang]}</h2>
      <div className="experiencie-timeline-container">
        <div className="experiencie-timeline">
          {experiencia.map((exp, idx) => (
            <div key={idx} className="experiencie-timeline-point">
              <button
                className={`experiencie-timeline-dot${activeIdx === idx ? " active" : ""}`}
                onClick={() => handleScrollTo(idx)}
                aria-label={`Go to experience from ${exp.startDate}`}
              />
              <button
                className={`experiencie-timeline-year${activeIdx === idx ? " active" : ""}`}
                onClick={() => handleScrollTo(idx)}
              >
                {exp.startDate}
              </button>

              {idx < experiencia.length - 1 && <div className="experiencie-timeline-line" />}

              {isMobile && idx === experiencia.length - 1 && (
                <div className="experiencie-timeline-line experiencie-timeline-line-mobile-extra" />
              )}
            </div>
          ))}
        </div>
        <div className="experiencie-details">
          <div
            className="experiencie-detail experiencie-detail-animated"
            key={activeIdx}
            tabIndex={-1}
          >
            <h3 className="experiencie-company">
              <a href={experiencia[activeIdx].url} target="_blank" rel="noopener noreferrer">
                {experiencia[activeIdx].name}
              </a>
            </h3>
            <div className="experiencie-period">
              {experiencia[activeIdx].startDate} - {experiencia[activeIdx].endDate}
            </div>
            <div className="experiencie-position">{experiencia[activeIdx].position}</div>
            <ul className="experiencie-summary">
              {experiencia[activeIdx].summary?.map((item, i) => (
                <li className="experiencie-summary-item" key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}