import Header from "./components/Header.js";
import Projects from "./components/Projects.js";
import MainBody from "./components/MainBody.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
