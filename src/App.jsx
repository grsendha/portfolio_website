import React from "react";
import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Navbar,
  Hero,
  StarsCanvas,
  Feedbacks,
  Tech,
  Works,
} from "./components";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary" style={{ opacity: 0.8 }}>
        <div className="bg-hero-pattern  bg-cover bg-no-repeat bg-center">
          <Toaster />
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
