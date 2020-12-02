import "./App.css";
import logo from "./img/logo.png";
import item1 from "./img/items/item1.png";
import item2 from "./img/items/item2.png";
import item3 from "./img/items/item3.png";

function App() {
  return (
    <div classNameName="App">
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
                <a href="https://1drv.ms/w/s!Ak145DmgCBuLgpID6zRDJ855ne3WLQ?e=6VVTUy">
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
            <h1>I Am Harrison A Full-Stack Web Developer</h1>
            <p className="lead">
              From Spokane Wa, proficient with the PERN stack.
            </p>
            <a href="#work-a" className="btn-light">
              View My Work
            </a>
          </div>
        </div>
      </header>

      <section id="home-a" className="text-center py-2">
        <div className="container">
          <h2 className="section-title">Technical Details</h2>
          <div className="bottom-line"></div>
          <p className="lead">
            I am a Full-Stack Web Developer proficient with the PERN Stack
          </p>
          <div className="specials">
            <div>
              <i className="fab fa-css3-alt fa-2x"></i>

              <h3>CSS</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias repellat quibusdam adipisci quas sed ullam
                accusantium aliquam numquam quidem.
              </p>
            </div>
            <div>
              <i className="fab fa-react fa-2x"></i>
              <h3>React</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias repellat quibusdam adipisci quas sed ullam
                accusantium aliquam numquam quidem.
              </p>
            </div>
            <div>
              <i className="fab fa-js-square fa-2x"></i>
              <h3>JavaScript</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias repellat quibusdam adipisci quas sed ullam
                accusantium aliquam numquam quidem.
              </p>
            </div>
            <div>
              <i className="fab fa-node fa-2x"></i>
              <h3>Node</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias repellat quibusdam adipisci quas sed ullam
                accusantium aliquam numquam quidem.
              </p>
            </div>
            <div>
              <i className="fab fa-html5 fa-2x"></i>
              <h3>HTML5</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias repellat quibusdam adipisci quas sed ullam
                accusantium aliquam numquam quidem.
              </p>
            </div>
            <div>
              <i className="fab fa-python fa-2x"></i>
              <h3>Python</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias repellat quibusdam adipisci quas sed ullam
                accusantium aliquam numquam quidem.
              </p>
            </div>
            <div>
              <i className="fas fa-database fa-2x"></i>
              <h3>Postgres</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias repellat quibusdam adipisci quas sed ullam
                accusantium aliquam numquam quidem.
              </p>
            </div>
            <div>
              <i className="fab fa-git-square fa-2x"></i>
              <h3>Git</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, molestias repellat quibusdam adipisci quas sed ullam
                accusantium aliquam numquam quidem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="home-b" className="text-center py-2">
        <div className="stats">
          <div>
            <ul>
              <li>
                <i className="fas fa-users fa-3x"></i>
              </li>
              <li className="stats-title">Clients</li>
              <li className="stats-number">100</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className="fas fa-award fa-3x"></i>
              </li>
              <li className="stats-title">Awards</li>
              <li className="stats-number">3</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className="fas fa-hourglass-start fa-3x"></i>
              </li>
              <li className="stats-title">Hours Worked</li>
              <li className="stats-number">3500</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className="fas fa-code-branch fa-3x"></i>
              </li>
              <li className="stats-title">Projects Completed</li>
              <li className="stats-number">135</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="home-c" className="text-center py-2">
        <div className="container">
          <h2 className="section-title">My Creative Process</h2>
          <div className="bottom-line"></div>
          <p className="lead">
            All of my UI/UX and design projects are based off of a practiced
            formula to get the result that I am looking for
          </p>
          <div className="process">
            <div>
              <i className="fas fa-file-alt fa-4x process-icon my-2">
                <div className="process-step">1</div>
              </i>
              <h3>Discuss The Project</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                voluptas laborum repellendus dolorum! Harum, cupiditate.
              </p>
            </div>
            <div>
              <i className="fas fa-desktop fa-4x process-icon my-2">
                <div className="process-step">2</div>
              </i>
              <h3>Brainstorming ^ Concept</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                voluptas laborum repellendus dolorum! Harum, cupiditate.
              </p>
            </div>
            <div>
              <i className="fas fa-object-ungroup fa-4x process-icon my-2">
                <div className="process-step">3</div>
              </i>
              <h3>UI/UX Planning</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                voluptas laborum repellendus dolorum! Harum, cupiditate.
              </p>
            </div>
            <div>
              <i className="fas fa-thumbs-up fa-4x process-icon my-2">
                <div className="process-step">4</div>
              </i>
              <h3>Interaction</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                voluptas laborum repellendus dolorum! Harum, cupiditate.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="work-a" className="text-center py-3">
        <div className="container">
          <h2 className="section-title">My Work</h2>
          <div className="bottom-line"></div>
          <p className="lead">Check out some of my projects</p>
          <div className="items">
            <div className="item">
              <div className="item-image">
                <img src={item1} alt="" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Design</p>
                  <h2 className="item-text-title">Great Gradients</h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={item2} alt="" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">UI/UX</p>
                  <h2 className="item-text-title">World Experience</h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={item3} alt="" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">UI/UX</p>
                  <h2 className="item-text-title">World Experience</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="main-footer">
        <div className="footer-content container">
          <p>Copyright &copy; 2020. All Rights Reserved</p>
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
    </div>
  );
}

export default App;
