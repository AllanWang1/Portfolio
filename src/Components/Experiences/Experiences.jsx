import React from 'react'
import WorkIcon from '../../assets/work.svg'
import EducationIcon from '../../assets/education.svg'
import ExtracurricularIcon from '../../assets/extracurricular.svg'

import { timelineElements } from "./Events";

import { 
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./Experiences.css";

const Experiences = () => {
  let workIconStyles = { background:"#06D6A0" };
  let educationIconStyles = { background:"#f9c74f" };
  let extracurricularIconStyles = { background:"#118AB2" };
  console.log(timelineElements);
  return (
    <div className="experiences">
      <h2 className="experiences-title">Experiences</h2>
      <VerticalTimeline>
        {
            timelineElements.map(element => {
                let isWorkIcon = element.icon === "work";
                let isEducationIcon = element.icon === "education";
                let showButton = 
                    element.buttonText !== undefined && 
                    element.buttonText !== null && 
                    element.buttonText !== "";
                return (
                    <VerticalTimelineElement
                        key={element.id}
                        date={element.date}
                        dateClassName="date"
                        iconStyle={
                            isEducationIcon ? educationIconStyles :
                            (isWorkIcon ? workIconStyles : extracurricularIconStyles)
                        }
                        icon={
                            isWorkIcon ? <img src={ WorkIcon } alt="Work" /> :
                            (isEducationIcon ? <img src={ EducationIcon } alt="Education" /> :
                                <img src={ ExtracurricularIcon } alt="Extracurricular" />
                            )
                        }
                    >
                        <h3 className="vertical-timeline-element-title">
                            { element.title }
                        </h3>
                        <h5 className="vertical-timeline-element-subtitle">
                            { element.location }
                        </h5>
                        <p id="description">
                            { element.description }
                        </p>
                        {showButton && (
                            <a 
                            className={`button 
                                ${isWorkIcon ? "workButton" :
                                  (isEducationIcon ? "educationButton" : "extracurricularButton")
                                }`}
                             href="/"
                            >
                                {element.buttonText}
                            </a>
                        )}
                    </VerticalTimelineElement>
                    
                )
            })
        }
      </VerticalTimeline>
    </div>
  )
}

export default Experiences
