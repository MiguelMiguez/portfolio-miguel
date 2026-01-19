import React, { useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import portfolioData from "../../data/portfolioData.json";
import "./Portfolio.css";

const sectionTitles = {
  es: {
    title: "Proyectos",
    subtitle: "Una selección de mis trabajos más recientes",
    viewProject: "Ver proyecto"
  },
  en: {
    title: "Projects",
    subtitle: "A selection of my most recent work",
    viewProject: "View project"
  }
};

const Portfolio = ({ lang }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const projects = portfolioData[lang] || [];
  const texts = sectionTitles[lang];

  return (
    <section id="proyectos" className="portfolio-section">
      <div className="portfolio-header">
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">{texts.title}</h2>
        <p className="section-subtitle">{texts.subtitle}</p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`portfolio-card ${index === 0 ? 'featured' : ''}`}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{ '--delay': `${index * 0.1}s` }}
          >
            <div className="card-image">
              <img src={project.image} alt={project.title} />
              <div className="card-overlay">
                <span className="view-btn">
                  {texts.viewProject}
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </div>

            <div className="card-content">
              <div className="card-header">
                <h3 className="card-title">{project.title}</h3>
                <ExternalLink
                  size={18}
                  className={`card-icon ${hoveredId === project.id ? 'active' : ''}`}
                />
              </div>

              <p className="card-description">{project.description}</p>

              <div className="card-tags">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span className="card-tag" key={i}>{tech}</span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="card-tag card-tag-more">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;