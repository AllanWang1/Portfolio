import React from 'react'
import "./More.css"

import { moreElements } from "./MoreData"
const More = () => {
  
  return (
    <div id="more" className="more">
      <div className="more-title">
        <h2>More About Me</h2>
      </div>
      <div className="more-container">
        {moreElements.map((activity) => {
          return (
            <div className="activity">
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default More
