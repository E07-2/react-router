import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Team from "./routes/Team";
import Contact from "./routes/Contact";
import "./App.css";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/*  Add no match route  */}
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
