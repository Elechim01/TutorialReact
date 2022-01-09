import React from "react";
import Bproperties from "./Bproperties";
import pimage1 from "../images/p1.png";
import pimage2 from "../images/p2.png";
import pimage3 from "../images/p3.png";

function Properties() {
  return (
    <div className="product">
      <div className="p-heading">
        <h3>Properties</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, velit!
        </p>
      </div>
      <div className="product-container">
	      <Bproperties image={pimage1} name="AL-Musalla" price="€240,989"/>
	      <Bproperties image={pimage2} name="AL-Hafz" price="€540,989"/>
	      <Bproperties image={pimage3} name="AL-Bahara" price="€940,989"/>
      </div>
    </div>
  );
}

export default Properties;
