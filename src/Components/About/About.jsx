import React from "react";
import "./About.css";
import profile_img from "../../assets/allan_bridge.svg";
const About = () => {
  return (
    <div id="about" className="about">
      <h2>About Me</h2>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I am Allan, I am a third-year Computer Science and
              Statistics student at UBC. I am passionate about both fields and
              enjoy applying my knowledge in real-world problems.
            </p>
            <p>
              During my time at UBC, I have discovered my love for working on
              projects and participating in events that challenge my technical
              skills. I strive to refine classroom learning through in-class
              academic projects and further extending them in personal projects
              and technical events. Self-motivated and curious, I often teach
              myself new concepts to develop my own projects.
            </p>
          </div>
        </div>
      </div>
      <div className="about-skills">
        <div className="about-skill">
          <p>Python</p>
          <hr style={{ width: "60%" }} />
        </div>
        <div className="about-skill">
          <p>Java</p>
          <hr style={{ width: "55%" }} />
        </div>
        <div className="about-skill">
          <p>C/C++</p>
          <hr style={{ width: "65%" }} />
        </div>
        <div className="about-skill">
          <p>Swift</p>
          <hr style={{ width: "50%" }} />
        </div>
        <div className="about-skill">
          <p>HTML & CSS</p>
          <hr style={{ width: "45%" }} />
        </div>
        <div className="about-skill">
          <p>JavaScript</p>
          <hr style={{ width: "55%" }} />
        </div>
        <div className="about-skill">
          <p>R</p>
          <hr style={{ width: "30%" }} />
        </div>
        <div className="about-skill">
          <p>SQL</p>
          <hr style={{ width: "50%" }} />
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h3>2 Times Dean's Honour List</h3>
          <p>&bull; Cumulative average: 91%.</p>
          <p>&bull; A+ standings in all computer science courses.</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h3>Trek Excellence Scholarship Receiver</h3>
          <p>&bull; Top 5% of first year students in the Faculty of Science.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
