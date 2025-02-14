import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Experiences from "./Components/Experiences/Experiences";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import More from "./Components/More/More";
import Cubing from "./Components/More/Cubing/Cubing";
import ParticlesBackground from "./Components/Particles/ParticlesBackground";

const App = () => {
  return (
    <Router>
      <ParticlesBackground />
      <Routes>
        <Route
          path="/Portfolio/"
          element={
            <div className="components">
              {/* put navbar here so it isn't on
               a different route, such as the cubing page */}
              <Navbar />
              <Hero />
              <About />
              <Experiences />
              <Projects />
              <More />
              <Contact />
            </div>
          }
        ></Route>
        <Route path="/Portfolio/cubing" element={<Cubing />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
