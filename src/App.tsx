import React from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./sections/hero";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="h-10 bg-red-500">Content</div>
    </>
  );
};

export default App;
