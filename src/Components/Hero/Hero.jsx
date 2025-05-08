import React, { useState, useEffect } from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.PNG";
import linkedin_img from "../../assets/linkedin.svg";

const Hero = () => {
  const lines = [
    "I am a third-year Computer Science and Statistics student at UBC",
    "with strong passion for creating practical, impactful programs",
    "and tackling challenges through data-driven solutions.",
  ];

  const [displayedText, setDisplayedText] = useState(["", "", ""]); // Stores typed characters
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine < lines.length) {
      if (currentChar <= lines[currentLine].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => {
            const newText = [...prev];
            newText[currentLine] = lines[currentLine].slice(0, currentChar + 1); // Take the first (currentChar+1) characters
            return newText;
          });
          setCurrentChar((prev) => prev + 1);
        }, 32);

        return () => clearTimeout(timeout); // Cleanup timeout
      } else {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }
    }
  }, [currentChar, currentLine, lines]);

  return (
    <div id="home" className="hero">
      <div className="profile-picture-container">
        <img
          className="profile"
          src={profile_img}
          alt="A picture of Allan Wang"
        />
      </div>

      <h1>
        <span>I'm Allan Wang, </span>Third Year Computer Science Student At UBC
      </h1>
      <p className="animated-text">
        {displayedText.map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <img src={linkedin_img} alt="" />
          <a
            href="https://www.linkedin.com/in/allan-wang-b489a3222/"
            target="_blank"
          >
            Connect with me
          </a>
        </div>
        <div className="hero-resume">
          <a href="/Portfolio/CSResume.pdf" target="_blank">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
