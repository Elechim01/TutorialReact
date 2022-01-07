import React from "react";

function Box(props) {
  return (
    <div className="s-box">
      <div className="s-b-img">
        <img src={props.image} alt={props.alte} />
      </div>
      <div className="s-b-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          commodi sunt eaque nihil quis nostrum soluta, obcaecati dolores odit!
          Ipsam?{" "}
        </p>
        <a href="#" className="cv-btn">
          {props.button}
        </a>
      </div>
    </div>
  );
}

export default Box;
