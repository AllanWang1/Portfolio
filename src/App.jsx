import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Experiences from "./Components/Experiences/Experiences";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import More from "./Components/More/More";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <More />
      <Contact />
    </div>
  );
};

export default App;
