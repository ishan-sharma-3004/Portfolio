import React from "react";
import About from "./Components/About"
import Testimonials from "./Components/Testimonials.js";
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"
import Contact from "./Components/Contact"
export default function App(){
  return (<main className="text-gray-400 bg-gray-900 body-font">
    <Navbar />
    <About/>
    <Projects/>
    <Skills/>
    <Testimonials/>
    <Contact/>
  </main>);
}