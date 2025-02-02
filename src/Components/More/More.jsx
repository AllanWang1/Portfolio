import React from "react";
import { Link } from "react-router-dom";
import "./More.css";

import { moreElements } from "./MoreData";
const More = () => {
  return (
    <div id="more" className="more">
      <div className="more-title">
        <h2>More About Me</h2>
      </div>
      <div className="more-container">
        {moreElements.map((activity) => {
          let showLink = activity.link !== "";
          return (
            <div key={activity.id} className="activity">
              <h3>{activity.title}</h3>
              <div className="activity-img-container">
                <img src={activity.coverImg} alt="" />
              </div>
              {showLink ? (
                <div className="activity-link">
                  <Link to={activity.link}>{activity.linkName}</Link>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More;
