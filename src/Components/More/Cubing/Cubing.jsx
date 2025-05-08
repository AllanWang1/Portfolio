import React from "react";

import "./Cubing.css";
import OddWeekend from "../../../assets/cubing/UBCOddWeekend.png";
import SpringSolving from "../../../assets/cubing/SpringSolving.png";
import PleaseBeSolved2025 from "../../../assets/cubing/PleaseBeSolved2025.png";
import UBCYearEnd2025 from "../../../assets/cubing/UBCYearEnd2025.png";
import SolveVideo from "../../../assets/cubing/speedsolve.mp4";


const Cubing = () => {
  return (
    <div className="cubing">
      <div className="cubing-intro">
       
        <div className="cubing-wca-link">
          <a href="https://www.worldcubeassociation.org/persons/2022WANG25">
            My WCA (World Cube Association) Profile
          </a>
        </div>
        
      </div>
      <h2>My fastest solve in Competition: (7.92s)</h2>
      <video src={SolveVideo} controls />
      <div className="podium-container">
        <div className="podium">
          <h4>
            🥈 Please Be Solved Vancouver 2025 - 2nd place in 3x3 blindfolded
          </h4>
          <img src={PleaseBeSolved2025} alt="" />
        </div>
        <div className="podium">
          <h4>🥇 UBC One And Only 2025 (Non-WCA) - 1st place in 5x5</h4>
          <img src={UBCYearEnd2025} alt="" />
        </div>
        <div className="podium">
          <h4>🥉 BC Spring Solving B 2023 - 3rd place in 3x3 blindfolded</h4>
          <img src={SpringSolving} alt="" />
        </div>
        <div className="podium">
          <h4>🥈 UBC Odd Weekend 2022 - 2nd place in 3x3 Multi-Blind</h4>
          <img src={OddWeekend} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cubing;
