import React from "react";
import item1 from "../../img/items/item1.png";
import item2 from "../../img/items/item2.png";
import item3 from "../../img/items/item3.png";

const Work = () => (
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
);

export default Work;
