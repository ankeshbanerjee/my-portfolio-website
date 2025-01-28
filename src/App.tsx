import React from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./sections/hero";
import { About } from "./sections/about";
import { Projects } from "./sections/projects";
import { Contact } from "./sections/contact";
import { Footer } from "./sections/footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
