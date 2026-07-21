import React from "react";
import "./Cubing.css";
import CubeIcon from "../../../assets/cubing/cube_icon.svg";
import Icon333BLD from "../../../assets/cubing/event-icons/333bf.svg";
import Icon333MBLD from "../../../assets/cubing/event-icons/333mbf.svg";
import Icon555 from "../../../assets/cubing/event-icons/555.svg";
import { podiums } from "./CubingData";

const eventIconMap = {
  "3x3x3BLD": Icon333BLD,
  "3x3x3MBLD": Icon333MBLD,
  "5x5x5": Icon555,
}

const PodiumCard = ({ medal, title, img, event, link }) => (
  <a
    className="podium-card"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="podium-image-wrapper">
      <img src={img} alt={title} className="podium-img" loading="lazy" />

      <span className="podium-medal">{medal}</span>
      <span className="podium-event">
        <img src={eventIconMap[event]} alt={event} />
      </span>
    </div>

    <div className="podium-content">
      <h4>{title}</h4>
    </div>
  </a>
);

const Cubing = () => {
  return (
    <section className="cubing">
      <div className="cubing-title">
        <img src={CubeIcon} alt="Cube Icon" className="cube-icon" />
        <h2>Speedcubing</h2>
        <img src={CubeIcon} alt="Cube Icon" className="cube-icon" />
      </div>

      <a
        className="wca-button"
        href="https://www.worldcubeassociation.org/persons/2022WANG25"
        target="_blank"
        rel="noopener noreferrer"
      >
        View my WCA Profile →
      </a>

      <p className="scroll-hint">Scroll to see my podiums →</p>
      <div className="podium-scroll-container">
        <div className="podium-scroll">
          {podiums.map((podium) => (
            <PodiumCard key={podium.title} {...podium} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cubing;
