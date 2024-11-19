import React from 'react'
import './Projects.css'
import { projects_data } from './projects_data'

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-title">
        <h2>Projects</h2>
      </div>
      <div className="project-container">
        {projects_data.map((project, index)=>{
            return (
                <div key = {index} className="project"> 
                    <div className="project-left">
                        <img key={index} src={project.img_} alt="" />
                    </div>
                    <div className="project-right">
                        <h3>{ project.title }</h3>
                        <h5>{ project.skills}</h5>
                        <p id="description">{ project.description }</p>
                        <p id="link">View Details</p>
                    </div>
                </div>
            )
        })}
      </div>

    </div>
  )
}

export default Projects
