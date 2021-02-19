import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";

function App() {
	return (
		<div className="App">
			<Route exact path="/" component={HomePage} />
		</div>
	);
}

export default App;
