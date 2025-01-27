import React from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./sections/hero";
import { About } from "./sections/about";
import { Projects } from "./sections/projects";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <div className="h-10 bg-red-500">Content</div>
    </>
  );
};

export default App;
