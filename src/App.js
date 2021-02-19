import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import HomePage from "./pages/homePage/homePage";
import Resume from "./components/resume/resume.component";

function App() {
	const [user, setUser] = useState(null);
	useEffect(() => {
		axios.get("https://api.github.com/users/harrisonMS/repos").then((user) => {
			setUser(user);
		});
	}, []);
	console.log(user);
	return (
		<div className="App">
			<Route exact path="/" component={HomePage} />
			{/* <Route exact path="/resume" component={Resume} /> */}
			{/* <Route
				path="/resume"
				component={() => {
					window.location.href =
						"https://drive.google.com/file/d/1BLi4oYmla4yprZ_oVK9pZLFtWEgcIGmD/view?usp=sharing";
					return null;
				}} */}
			/>
		</div>
	);
}

export default App;
