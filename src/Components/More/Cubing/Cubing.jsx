import React from "react";
import "./Cubing.css";

import { podiums } from "./CubingData";

const PodiumCard = ({ medal, title, img, link }) => (
  <a
    className="podium-card"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="podium-image-wrapper">
      <img src={img} alt={title} className="podium-img" loading="lazy" />

      <span className="podium-medal">{medal}</span>
    </div>

    <div className="podium-content">
      <h4>{title}</h4>
    </div>
  </a>
);

const Cubing = () => {
  return (
    <section className="cubing">
      <h2>Speedcubing</h2>

      <p className="cubing-description">
        I've been competing in WCA competitions since 2022. My favorite events
        are <strong>5×5×5</strong> and <strong>3×3 Blindfolded</strong>.
      </p>

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
