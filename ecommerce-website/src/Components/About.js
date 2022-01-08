import React from "react";
import Aboutimage from "../images/organic-about-1.png";

function About() {
  return (
    <div className="about">
      <div className="about-img">
        <img src={Aboutimage} alt="img" />
      </div>
      <div className="about-text">
        <h3>
          Fresh Food,Simply  <font>Delicious</font>
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, repellendus tempora? Modi facere perferendis quidem
          beatae voluptate nesciunt ullam labore, soluta tempore nisi?
          Blanditiis rem illo eaque officiis? Minima repellendus odit
          cupiditate, ipsam quibusdam ut, veniam possimus distinctio animi
          quisquam esse, mollitia quos illum tenetur?
        </p>
        <a href="#" className="about-img">
          Read More
        </a>
      </div>
    </div>
  );
}

export default About;
