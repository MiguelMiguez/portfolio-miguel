import React from "react";
import { ExternalLink } from "lucide-react";
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
    return (
        <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
        >
            {project.image && (
                <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-overlay">
                        <ExternalLink size={24} />
                    </div>
                </div>
            )}
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {project.description && <p className="project-desc">{project.description}</p>}
                {project.technologies && (
                    <div className="project-tags">
                        {project.technologies.map((tech, i) => (
                            <span className="project-tag" key={i}>{tech}</span>
                        ))}
                    </div>
                )}
            </div>
        </a>
    );
};

export default ProjectCard;