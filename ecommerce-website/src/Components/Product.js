import React from "react";
import Box from "./Product-box/Box";
import image1 from "../images/organic-pro-1.jpg";
import image2 from "../images/organic-pro-2.jpg";
import image3 from "../images/organic-pro-3.jpg";
import image4 from "../images/organic-pro-4.jpg";
import image5 from "../images/organic-pro-5.jpg";
import image6 from "../images/organic-pro-6.jpg";

function Product() {
  return (
    <div className="product">

      <div className="p-heading">
        <h3>New Organic Products</h3>
      </div>

      <div className="product-container">
        <Box image={image1} name="Water Melon" price="$23.3"/>
	<Box image={image2} name="Water Melon" price="$33.3"/>
	<Box image={image3} name="Water Melon" price="$29.3"/>
	<Box image={image4} name="Water Melon" price="$43.3"/>
	<Box image={image5} name="Water Melon" price="$73.3"/>
	<Box image={image6} name="Water Melon" price="$33.3"/>
      </div>

    </div>
  );
}

export default Product;
