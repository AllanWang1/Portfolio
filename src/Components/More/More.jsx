import React from "react";
import { Link } from "react-router-dom";
import "./More.css";
import Cubing from "./Cubing/Cubing";
import Badminton from "../../assets/badminton.mp4";
import Badminton2 from "../../assets/badminton2.mp4";

const More = () => {
  return (
    <div id="more" className="more">
      <div className="more-title">
        <h2>Hobbies</h2>
      </div>
      <Cubing />
      <div className="badminton">
        <h3>Badminton</h3>
        <video src={Badminton} autoPlay muted loop playsInline />
        <video src={Badminton2} autoPlay muted loop playsInline />
      </div>
      
    </div>
  );
};

export default More;
