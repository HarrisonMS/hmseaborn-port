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
						<Link to="/">Home</Link>
					</li>
					<li>
						{/* <Link to="/resume">Resume</Link> */}
						<a
							rel="noopener noreferrer"
							href="https://drive.google.com/file/d/1fdW5Nibp6i3UuEeojyhHqpCln1TliILI/view?usp=sharing"
							className="current"
						>
							Resume
						</a>
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
				<h1>Hello, I'm Harrison Seaborn</h1>

				<h1>a full-stack developer</h1>
				<p className="lead">
					From Spokane WA, proficient with the{" "}
					<span
						title="Postgres | Express | React | Node.js"
						className="tooltip"
					>
						PERN stack.
					</span>{" "}
				</p>
				<a href="#work-a" className="btn-light">
					View My Work
				</a>
			</div>
		</div>
	</header>
);

export default Header;
