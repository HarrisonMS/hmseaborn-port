import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../img/logo.png";

function Resume() {
	return (
		<div style={{ height: "100vh" }}>
			<nav id="sub-nav">
				<img src={logo} alt="My Portfolio" id="logo" />
				<Link to="/">Home</Link>
			</nav>
			<iframe
				src="https://onedrive.live.com/embed?cid=8B1B08A039E4784D&resid=8B1B08A039E4784D%2135146&authkey=AFkE1oNzEX7jHbc&em=2"
				width="100%"
				height="100%"
				frameborder="0"
				scrolling="no"
			></iframe>
		</div>
	);
}
export default Resume;
