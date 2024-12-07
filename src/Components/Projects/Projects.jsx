import React from "react";
import "./Projects.css";
import { projects_data } from "./projects_data";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h2>Projects</h2>
      </div>
      <div className="project-container">
        {projects_data.map((project, index) => {
          let showButton =
            project.buttonText !== "" &&
            project.buttonText !== null &&
            project.buttonText !== undefined;
          return (
            <div key={index} className="project">
              <div className="project-left">
                <img key={index} src={project.img_} alt="" />
              </div>
              <div className="project-right">
                <h3>{project.title}</h3>
                <h5>{project.skills}</h5>
                <p id="description">{project.description}</p>
                <div className="project-right-bottom">
                  {showButton && (
                    <div className="project-link">
                      <a href={project.link} target="_blank">
                        {project.buttonText}
                      </a>
                    </div>
                  )}
                  <div className="project-right-bottom-right"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
