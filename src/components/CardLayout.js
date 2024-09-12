import React from "react";
import '../App.css';
import '../index.css';
import Widget from "./Widget";
import Gallery from "./Gallery";

const CardLayout = () => {
  return (
    <div className="hero-container bg-gradient-to-b from-[#282c31] to-[#191b1f] text-white">
      <div className="cards">
        <div className="leftHalf">
        </div>
        <div className="rightHalf">
          <Widget />
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
