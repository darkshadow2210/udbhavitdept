import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Technical from "./components/Technical";
import NonTechnical from "./components/NonTechnical";
import TechTorque from "./pages/TechTorque";
import TechDebate from "./pages/TechDebate";
import LockNKey from "./pages/LockNKey";
import Canvas from "./pages/Canvas";
import RedLight from "./pages/RedLight";
import Whisper from "./pages/Whisper";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/nontechnical" element={<NonTechnical />} />
        <Route path="/techtorque" element={<TechTorque />} />
        <Route path="/techdebate" element={<TechDebate />} />
        <Route path="/locknkey" element={<LockNKey />} />
        <Route path="/canvas" element={<Canvas />} />
        <Route path="/redlight" element={<RedLight />} />
        <Route path="/whisperchallenge" element={<Whisper />} />
      </Routes>
    </Router>
  );
}

export default App;
