import React from "react";
import item1 from "../../img/items/item1.png";
import item2 from "../../img/items/item2.png";
import item3 from "../../img/items/storysquad.PNG";
import { Link } from "react-router-dom";

const Work = () => (
	<section id="work-a" className="text-center py-3">
		<div className="container">
			<h2 className="section-title">My Work</h2>
			<div className="bottom-line"></div>
			<p className="lead">Check out some of my projects</p>
			<div className="items">
				<div className="item">
					<Link
						to="route"
						target="_blank"
						onClick={(event) => {
							event.preventDefault();
							window.open("https://auto-matics.vercel.app/");
						}}
					>
						<div className="item-image">
							<img src={item1} alt="" />
						</div>
						<div className="item-text">
							<div className="item-text-wrap">
								<p className="item-text-category">Marketing</p>
								<h2 className="item-text-title">JS | HTML | CSS</h2>
							</div>
						</div>
					</Link>
				</div>
				<div className="item">
					<Link
						to="route"
						target="_blank"
						onClick={(event) => {
							event.preventDefault();
							window.open("https://royalclothes.herokuapp.com/");
						}}
					>
						<div className="item-image">
							<img src={item2} alt="" />
						</div>
						<div className="item-text">
							<div className="item-text-wrap">
								<p className="item-text-category">Eccommerce</p>
								<h2 className="item-text-title">
									React | Redux | Firebase | Styled-Components
								</h2>
							</div>
						</div>
					</Link>
				</div>
				<div className="item">
					<Link
						to="route"
						target="_blank"
						onClick={(event) => {
							event.preventDefault();
							window.open("https://github.com/HarrisonMS/story-squad-be-a");
						}}
					>
						<div className="item-image">
							<img src={item3} alt="" />
						</div>
						<div className="item-text">
							<div className="item-text-wrap">
								<p className="item-text-category">Story Squad</p>
								<h2 className="item-text-title">
									React | Styled-Components | Postgres | AWS
								</h2>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	</section>
);

export default Work;
