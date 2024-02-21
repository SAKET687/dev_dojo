/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Home from "./Home";
import Hackathon from "./Hackathon";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Hackathon" element={<Hackathon />} />
    </Routes>
  </BrowserRouter>
);

export default App;
