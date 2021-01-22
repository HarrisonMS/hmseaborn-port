import React from "react";
import LogoWorld from "../../img/items/logoWorld.svg";
const HomeA = (props) => (
	<section id="home-a" className="text-center py-2">
		<div className="container">
			<h2 className="section-title">Technical Details</h2>
			<div className="bottom-line"></div>
			<p className="lead">
				I'm Harrison Seaborn from Spokane, WA. I'm a Full-Stack Developer I've
				been programming since September 2019, at that time these are some of
				the skills I have acquired displayed in a shelf I built using Figma.
			</p>
			<div className="specials">
				<div>
					<i className="fas fa-toolbox fa-2x"></i>

					<h3>Skills</h3>
					<p>
						Coming from a background in construction I try and use the skills I
						learned such as attention to detail, communication and following a
						plan, In order to build beautiful websites. I am proficient with
						CSS, HTML, JavaScript, React, Node, and Express.Js. I am constantly
						trying to widen my skill base by learning new languages and
						libraries. As of now I am looking to improve on my problem solving
						skills with daily code challenges using either Python or JavaScript.
						I am also focusing on improving my design skills and using tools
						such as Figma and Whimsical to bring my ideas to the page.
					</p>
				</div>
				<img className="logo-world" src={LogoWorld} />
			</div>
		</div>
	</section>
);

export default HomeA;
