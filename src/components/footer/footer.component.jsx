import React from "react";
import MyForm from "./email.component";
const Footer = () => (
	<footer id="main-footer">
		<MyForm />
		<div className="footer-content container">
			<p className="cp-text">© Copyright 2020. All rights reserved.</p>
			{/* <p>Copyright &copy; 2020. All Rights Reserved</p> */}
			<div className="social">
				<a href="mailto:hmseaborn@gmail.com">
					<i className="fab fa fa-envelope"></i>
				</a>
				<a href="https://twitter.com/HarrisonSeaborn">
					<i className="fab fa-twitter"></i>
				</a>
				<a href="https://github.com/HarrisonMS">
					<i className="fab fa-github"></i>
				</a>
				<a href="https://www.linkedin.com/in/harrisonmichaelseaborn/">
					<i className="fab fa-linkedin"></i>
				</a>
			</div>
		</div>
	</footer>
);
export default Footer;
