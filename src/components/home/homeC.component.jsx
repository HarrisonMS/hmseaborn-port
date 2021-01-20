import React from "react";

const HomeC = () => (
	<section id="home-c" className="text-center py-2">
		<div className="container">
			<h2 className="section-title">My Creative Process</h2>
			<div className="bottom-line"></div>
			<p className="lead">
				All of my projects are based off of a practiced formula to get the
				result that I am looking for
			</p>
			<div className="process">
				<div>
					<i className="fas fa-file-alt fa-4x process-icon my-2">
						<div className="process-step">1</div>
					</i>
					<h3>Discuss The Project</h3>
					<p>
						The first step in my development process is to discuss the project
						and make sure the entire team is aware of everything that needs to
						be done. Communication is key to this part of the process being able
						to accurately understand what the stakeholders are looking for and
						knowing the limitations of your team and the time constraints are
						invaluable to delivering a great product.
					</p>
				</div>
				<div>
					<i className="fas fa-desktop fa-4x process-icon my-2">
						<div className="process-step">2</div>
					</i>
					<h3>Brainstorming ^ Planning</h3>
					<p>
						The planning of the project is probably one of the most imporant
						steps in the process. This is where we need to organize what will be
						done and by whom it will be done by. In this part of the process I
						like to make use of a trello board and figma or a similar technology
						to map out the user flow that we want to acheive for this project.
						Also discuss what technologies we will use to complete the product.
					</p>
				</div>
				<div>
					<i className="fas fa-object-ungroup fa-4x process-icon my-2">
						<div className="process-step">3</div>
					</i>
					<h3>UI/UX</h3>
					<p>
						If we have a UI/UX designer on our team this would be the time to go
						over their wireframe design and discuss if the plan laid out can be
						achieved by our team. On the other hand if we don't have a designer.
						We would come up with a wireframe that dipicts the userflow and what
						the clients would see as they traverse through the app. Color theme,
						font styles and layout of our app accross multiple screen sizes will
						also be discussed during this step.
					</p>
				</div>
				<div>
					<i className="fas fa-thumbs-up fa-4x process-icon my-2">
						<div className="process-step">4</div>
					</i>
					<h3>Execution</h3>
					<p>
						Sticking to our laid out plan as closely as possible this is where
						everything starts coming together. As we build, use of communication
						tools like the trello board and having regular meetings with our
						stakeholders is key. We can show the progress we have made and adapt
						to the needs of our stakeholder and clients. Following these four
						steps we can deliver products in a timely manner that meets all the
						needs of our stakeholders.
					</p>
				</div>
			</div>
		</div>
	</section>
);

export default HomeC;
