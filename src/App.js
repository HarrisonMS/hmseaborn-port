import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import HomePage from "./pages/homePage/homePage";
import Resume from "./components/resume/resume.component";

function App() {
	return (
		<div className="App">
			<Route exact path="/" component={HomePage} />
		</div>
	);
}

export default App;
