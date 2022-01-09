import React from "react";
import Navbar from "./Navbar";

function Header() {
  return(
  <div className="header">
	  <Navbar/>
	  <div className='intro'>
		<p>Looking for a Property !</p>  
		<h1><span>Buy </span>and <span> Sel</span> Properties</h1>
		<p className='details'>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
			Neque quidem ducimus laudantium iure impedit enim fugit doloremque, 
			perferendis, at ex voluptatem omnis mollitia sit esse.
		</p>
		<a href='#' className='header-btn'>Details</a>
	  </div>
  </div>
  );
}

export default Header;
