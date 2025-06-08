import React, { useState, useEffect } from "react";
import portfolioData from "../../data/portfolioData.json";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Portfolio.css";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(portfolioData.length / itemsPerPage);


  const goToSlide = (idx) => {
    if (idx === currentIndex || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setAnimating(false);
    }, 400);
  };

  const currentProjects = portfolioData.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section id="proyectos" className="carousel-section">
      <h2 className="carousel-title">Proyectos</h2>
      <div className="carousel-container">
        <div
          className={`carousel-cards${animating ? " animating" : ""}`}
        >
          {currentProjects.map((project, idx) => (
            <ProjectCard key={project.id || idx} project={project} />
          ))}
        </div>
      </div>
      <div className="carousel-pagination">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            className={`carousel-dot${currentIndex === idx ? " active" : ""}`}
            onClick={() => goToSlide(idx)}
            aria-label={`Ir a página ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;