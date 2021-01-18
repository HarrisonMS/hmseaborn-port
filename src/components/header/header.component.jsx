import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

const Header = () => (
	<header id="header-home">
		<div className="container">
			<nav id="main-nav">
				<img src={logo} alt="My Portfolio" id="logo" />
				<ul>
					<li>
						<a href="index.html" className="current">
							Home
						</a>
					</li>
					<li>
						<Link to="/resume">Resume</Link>
					</li>
					<li>
						<a href="#work-a">Work</a>
					</li>
					<li>
						<a href="#main-footer">Contact</a>
					</li>
				</ul>
			</nav>
			<div className="header-content">
				<h1>
					Hello, I'm <span className="span-orange">Harrison Seaborn</span>
				</h1>{" "}
				<br />
				<h1>I'm a full-stack developer</h1>
				<p className="lead">From Spokane Wa, proficient with the PERN stack.</p>
				<a href="#work-a" className="btn-light">
					View My Work
				</a>
			</div>
		</div>
	</header>
);

export default Header;
