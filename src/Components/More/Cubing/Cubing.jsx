import React from "react";

import "./Cubing.css";
import OddWeekend from "../../../assets/cubing/UBCOddWeekend.png";
import SpringSolving from "../../../assets/cubing/SpringSolving.png";

const Cubing = () => {
  return (
    <div className="cubing">
      <div className="cubing-wca-link">
        <a href="https://www.worldcubeassociation.org/persons/2022WANG25">
          My WCA (World Cube Association) Profile
        </a>
      </div>
      <div className="cubing-intro">
        <h2>I have over 10 years of experience in cubing.</h2>
        <h3>Have been competing in WCA (World Cube Association) competitions since 2022.</h3>
        <p>Though I compete in a wide variety of events, my favourite events to practice are 3x3, 5x5, and 3x3 blindfolded.</p>
        <p>A podium is long overdue, and my current goal is to podium at a competition in 5x5!</p>
      </div>
      <div className="podium">
        <h3>🥉 BC Spring Solving B 2023 - 3rd place in 3x3 blindfolded</h3>
        <img src={SpringSolving} alt="" />
      </div>
      <div className="podium">
        <h3>🥈 UBC Odd Weekend 2022 - 2nd place in 3x3 Multi-Blind</h3>
        <img src={OddWeekend} alt="" />
      </div>
    </div>
  );
};

export default Cubing;
