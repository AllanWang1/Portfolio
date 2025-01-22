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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/Portfolio-Vite/"
          element={
            <div>
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
        <Route path="/Portfolio-Vite/cubing" element={<Cubing />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
