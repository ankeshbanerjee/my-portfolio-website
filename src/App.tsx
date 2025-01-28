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
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
