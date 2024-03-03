import Header from "./components/Header.js";
import Projects from "./pages/Project.jsx";
import MainBody from "./components/MainBody.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
