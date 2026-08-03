import "./Projects.css";
import { projects_data } from "./projects_data";
import { useRef } from "react";

const ProjectCard = ({ project, featured = false }) => {
  const skills = project.skills.split(",").map((skill) => skill.trim());

  const showButton = project.buttonText && project.buttonText.trim() !== "";

  return (
    <article
      className={`project-card ${featured ? "featured-card" : "carousel-card"}`}
    >
      <div className="project-image-container">
        <img
          src={project.img_}
          alt={`${project.title} preview`}
          className="project-image"
        />
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <div className="project-tags">
          {skills.slice(0, featured ? 8 : 5).map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>

        <p>{project.description}</p>

        {showButton && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            {project.buttonText}
            <span>↗</span>
          </a>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  const carouselRef = useRef(null);

  const featuredProjects = projects_data.slice(0, 3);
  const otherProjects = projects_data.slice(3);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-title">
        <h2>Projects</h2>
        <p>
          I've worked on software engineering, full-stack, algorithm, and data
          science projects.
        </p>
      </div>

      <h3 className="section-label">Featured Projects</h3>

      <div className="featured-container">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} featured={true} />
        ))}
      </div>

      <div className="other-project-header">
        <h3 className="section-label">More Projects</h3>

        <div className="carousel-buttons">
          <button onClick={() => scrollCarousel("left")}>←</button>

          <button onClick={() => scrollCarousel("right")}>→</button>
        </div>
      </div>

      <div className="carousel-container" ref={carouselRef}>
        {otherProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
