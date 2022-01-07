import React from "react";
import featureimage from "../images/Frame19.png";

function Features() {
  return (
    <div id="features">
      <div className="features-model">
        <img src={featureimage} alt="feature-image" />
      </div>
      <div className="features-text">
        <h2>Features</h2>
	<h3>This Application <span>Software</span> is Art</h3>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
	Enim vitae, architecto reprehenderit consequatur ducimus quod nihil 
	vero nisi. Praesentium, saepe ipsum et, debitis dolores rem autem facere 
	deleniti fugit officiis itaque unde repellat quos suscipit! Velit commodi 
	tempore nostrum quae.  </p>
	<button>View More Features</button>
      </div>
    </div>
  );
}

export default Features;
