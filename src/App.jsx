import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Experiences from "./Components/Experiences/Experiences";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import More from "./Components/More/More";

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
              <Link to="/cubing">Cubing Page</Link>
              <Contact />
            </div>
          }
        ></Route>
        <Route path="/cubing" element={<Projects />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
