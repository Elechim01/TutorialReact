import React from "react";
import aboutimage from "../images/about.png";

function About() {
  return (
    <div className="about">
      <div className="about-model">
        <img src={aboutimage} alt="about image" />
      </div>
      <div className='about-text'>
	     <h2> We Are The Best <br/>Real Estate Company</h2> 
	     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
		Tenetur tempora quas accusantium dolor aut incidunt, quis vitae 
		aliquid adipisci quasi quod. Id, odit dicta recusandae ipsam, officia 
		maxime, ratione magnam vel eum fuga nesciunt dolorem. Accusantium placeat 
		ad ducimus quam?</p>
		<button>View More Details</button>
      </div>
    </div>
  );
}

export default About;
