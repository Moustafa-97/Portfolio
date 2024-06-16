import React from "react";
import Hero from "../hero/Hero";
import About from "../about/About";
import Education from "../education/Education";
import Projects from "../projects/Projects";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Skill from "../skill/Skill";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Education />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}
