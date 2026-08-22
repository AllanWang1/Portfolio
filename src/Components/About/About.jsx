import React from "react";
import aboutAvatar from "../../assets/about_avatar.webp";
import "./About.css";
import { useEffect, useState } from "react";

const About = () => {
  const [problemsSolved, setProblemsSolved] = useState(null);
  const easy = problemsSolved?.easySolved || 0;
  const medium = problemsSolved?.mediumSolved || 0;
  const hard = problemsSolved?.hardSolved || 0;
  const total = problemsSolved?.solvedProblem || 0;

  const easyPercent = (easy / total) * 100;
  const mediumPercent = (medium / total) * 100;
  const hardPercent = (hard / total) * 100;
  useEffect(() => {
    const fetchLeetcodeData = async () => {
      try {
        const response = await fetch(
          "https://alfa-leetcode-api.onrender.com/allan357161/solved",
        );
        const data = await response.json();
        setProblemsSolved(data);
        console.log("LeetCode problems solved:", data);
      } catch (error) {
        console.error("Error fetching LeetCode data:", error);
      }
    };
    fetchLeetcodeData();
  }, []);

  return (
    <div id="about" className="about">
      <h2>About Me</h2>
      <div className="about-sections">
        <div className="about-left">
          <img src={aboutAvatar} alt="Allan" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I am Allan, I am a fourth-year Computer Science and
              Statistics student at UBC. I am passionate about both fields of
              study and I enjoy applying my knowledge in real-world problems.
            </p>
            <p>
              I enjoy working on projects that are impactful and challenging. I
              have experience in embedded software engineering, web development,
              infotainment applications, and data analysis.
            </p>
          </div>
        </div>
      </div>

      <div className="about-stats">
        <div className="leetcode-solves">
          {problemsSolved && (
            <div className="leetcode">
              <h4>LeetCode Solves</h4>

              <div className="leetcode-content">
                <div
                  className="leetcode-ring"
                  style={{
                    background: `conic-gradient(
            #38a169 0% ${easyPercent}%,
            #d69e2e ${easyPercent}% ${easyPercent + mediumPercent}%,
            #e53e3e ${easyPercent + mediumPercent}% 100%
          )`,
                  }}
                >
                  <div className="leetcode-ring-inner">
                    <span className="leetcode-total">{total}</span>
                    <span className="leetcode-label">Solved</span>
                  </div>
                </div>

                <div className="leetcode-legend">
                  <div className="leetcode-legend-item">
                    <span className="legend-dot easy-dot"></span>
                    <div>
                      <strong>{easy}</strong>
                      <span>Easy</span>
                    </div>
                  </div>

                  <div className="leetcode-legend-item">
                    <span className="legend-dot medium-dot"></span>
                    <div>
                      <strong>{medium}</strong>
                      <span>Medium</span>
                    </div>
                  </div>

                  <div className="leetcode-legend-item">
                    <span className="legend-dot hard-dot"></span>
                    <div>
                      <strong>{hard}</strong>
                      <span>Hard</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
