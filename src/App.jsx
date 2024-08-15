/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Home from "./Home";
import Hackathons from "./Hackathons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Freelancer from "./Freelancer";

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/hackathons" element={<Hackathons />} />
			<Route path="/contact4freelancing" element={<Freelancer />} />
		</Routes>
	</BrowserRouter>
);

export default App;
