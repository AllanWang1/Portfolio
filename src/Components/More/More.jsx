import { useRef } from "react";
import "./More.css";

import Cubing from "./Cubing/Cubing";
import Badminton from "../../assets/badminton.mp4";
import Badminton2 from "../../assets/badminton2.mp4";
import Badminton3 from "../../assets/badminton3.mp4";
import Badminton4 from "../../assets/badminton4.mp4";

export default function More() {

  return (
    <div id="more" className="more">
      <div className="more-title">
        <h2>Hobbies</h2>
      </div>

      <Cubing />

      <section className="badminton">
        <div className="badminton-heading">
          <h3>Badminton</h3>
        </div>
        <div
          className="badminton-video-containers"
        >
          <video src={Badminton3} autoPlay muted loop playsInline />
          <video src={Badminton} autoPlay muted loop playsInline />
          <video src={Badminton2} autoPlay muted loop playsInline />
          <video src={Badminton4} autoPlay muted loop playsInline />
        </div>
      </section>
    </div>
  );
}