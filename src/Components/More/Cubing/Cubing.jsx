import React from "react";

import "./Cubing.css";
import OddWeekend from "../../../assets/cubing/UBCOddWeekend.png";
import SpringSolving from "../../../assets/cubing/SpringSolving.png";
import PleaseBeSolved2025 from "../../../assets/cubing/PleaseBeSolved2025.png";
import UBCYearEnd2025 from "../../../assets/cubing/UBCYearEnd2025.png";
import SurreyMondayOpen from "../../../assets/cubing/SurreyMondayOpen.png";
import SolveVideo from "../../../assets/cubing/speedsolve.mp4";

const podiums = [
  {
    medal: "🥈",
    title: "Surrey Monday Open 2025 - Organizer & 2nd place in 5x5",
    img: SurreyMondayOpen,
    link: "https://www.worldcubeassociation.org/competitions/SurreyMondayOpen2025",
  },
  {
    medal: "🥈",
    title: "Please Be Solved Vancouver 2025 - 2nd place in 3x3 blindfolded",
    img: PleaseBeSolved2025,
    link: "https://www.worldcubeassociation.org/competitions/PleaseBeSolvedVancouver2025",
  },
  {
    medal: "🥇",
    title: "UBC One And Only 2025 (Non-WCA) - 1st place in 5x5",
    img: UBCYearEnd2025,
    link: "https://speedcubingubc.vercel.app/meetings/4",
  },
  {
    medal: "🥉",
    title: "BC Spring Solving B 2023 - 3rd place in 3x3 blindfolded",
    img: SpringSolving,
    link: "https://www.worldcubeassociation.org/competitions/BCSpringSolvingB2023",
  },
  {
    medal: "🥈",
    title: "UBC Odd Weekend 2022 - 2nd place in 3x3 Multi-Blind",
    img: OddWeekend,
    link: "https://www.worldcubeassociation.org/competitions/UBCOddWeekend2022",
  },
];

const PodiumCard = ({ medal, title, img, link }) => (
  <div className="podium-card">
    <a href={link} target="_blank">
      <img src={img} alt={title} className="podium-img" />
      <h4 className="podium-title">
        {medal} {title}
      </h4>
    </a>
  </div>
);

const Cubing = () => {
  return (
    <div className="cubing">
      <h3>Speedcubing</h3>
      <div className="cubing-intro">
        <div className="cubing-wca-link">
          <a href="https://www.worldcubeassociation.org/persons/2022WANG25" target="_blank">
            My WCA (World Cube Association) Profile
          </a>
        </div>
      </div>
      {/* <h2>My fastest solve in Competition: (7.92s)</h2>
      <video src={SolveVideo} controls /> */}
      <div className="podium-container">
        <h2 className="podium-heading">Cubing Highlights</h2>
        <div className="podium-grid">
          {podiums.map((p, i) => (
            <PodiumCard key={i} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cubing;
