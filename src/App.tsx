import React from "react";
import { Navbar } from "./components/navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="w-full bg-red-500 h-56" />
    </>
  );
};

export default App;
