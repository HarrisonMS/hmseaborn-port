import React from "react";
import LogoWorld from "../../img/items/logoWorld.svg";
const HomeA = (props) => (
	<section id="home-a" className="text-center py-2">
		<div className="container">
			<h2 className="section-title">Technical Details</h2>
			<div className="bottom-line"></div>
			<p className="lead">
				I am a Full-Stack Web Developer proficient with the PERN Stack. I have
				been programming since September 2019, in that time these are some of
				the skils I have acquired.
			</p>
			<div className="specials">
				<div>
					<i className="fab fa-css3-alt fa-2x"></i>
					<h3>CSS</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
						molestias repellat quibusdam adipisci quas sed ullam accusantium
						aliquam numquam quidem.
					</p>
				</div>
				<img className="logo-world" src={LogoWorld} />
			</div>
			{/* <div className="specials">
        <div>
          <i className="fab fa-css3-alt fa-2x"></i>
          <h3>CSS</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            molestias repellat quibusdam adipisci quas sed ullam accusantium
            aliquam numquam quidem.
          </p>
        </div>
        <div>
          <i className="fab fa-react fa-2x"></i>
          <h3>React</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            molestias repellat quibusdam adipisci quas sed ullam accusantium
            aliquam numquam quidem.
          </p>
        </div>
        <div>
          <i className="fab fa-js-square fa-2x"></i>
          <h3>JavaScript</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            molestias repellat quibusdam adipisci quas sed ullam accusantium
            aliquam numquam quidem.
          </p>
        </div>
        <div>
          <i className="fab fa-node fa-2x"></i>
          <h3>Node</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            molestias repellat quibusdam adipisci quas sed ullam accusantium
            aliquam numquam quidem.
          </p>
        </div>
        <div>
          <i className="fab fa-html5 fa-2x"></i>
          <h3>HTML5</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            molestias repellat quibusdam adipisci quas sed ullam accusantium
            aliquam numquam quidem.
          </p>
        </div>
        <div>
          <i className="fab fa-python fa-2x"></i>
          <h3>Python</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            molestias repellat quibusdam adipisci quas sed ullam accusantium
            aliquam numquam quidem.
          </p>
        </div>
        <div>
          <i className="fas fa-database fa-2x"></i>
          <h3>Postgres</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            molestias repellat quibusdam adipisci quas sed ullam accusantium
            aliquam numquam quidem.
          </p>
        </div>
        <div>
          <i className="fab fa-git-square fa-2x"></i>
          <h3>Git</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            molestias repellat quibusdam adipisci quas sed ullam accusantium
            aliquam numquam quidem.
          </p>
        </div>
      </div> */}
		</div>
	</section>
);

export default HomeA;
