import React from "react";

const HomeB = () => (
	<section id="home-b" className="text-center py-2">
		<div className="stats">
			<div>
				<ul>
					<li>
						<i className="fas fa-users fa-3x"></i>
					</li>
					<li className="stats-title">Clients</li>
					<li className="stats-number">1</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>
						<i className="fas fa-award fa-3x"></i>
					</li>
					<li className="stats-title">Contributions</li>
					<li className="stats-number">1056</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>
						<i className="fas fa-hourglass-start fa-3x"></i>
					</li>
					<li className="stats-title">Hours Worked</li>
					<li className="stats-number">700 +</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>
						<i className="fas fa-code-branch fa-3x"></i>
					</li>
					<li className="stats-title">Pull Requests</li>
					<li className="stats-number">113</li>
				</ul>
			</div>
		</div>
	</section>
);

export default HomeB;
