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
      <Route exact path="/resume" component={Resume} />
    </div>
  );
}

export default App;
