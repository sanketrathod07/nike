import React from "react";
import NikeLogo from "../images/hero-image.png";
import Amazon from "../images/amazon.png";
import Flipcard from "../images/flipkart.png";

function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="homeTextContainer1">
          <h1>
            YOUR FEET <br />
            DESERVE <br />
            THE BEST
          </h1>
          <div className="homeContainer1Para">
            The radiance lives on in the Nike Air Force 1 '07, the b-ball icon
            that puts a fresh spin on what you know best: crisp leather, bold
            colours and the perfect amount of flash to make you shine.
          </div>
          <div className="homeContainer1btn">
            <button
              onClick={() => {
                alert("Shop Now Is Clicked!!");
              }}
              className="shopnowbtn">
              Shop Now
            </button>
            <button
              onClick={() => {
                alert("This feature is Offline !!");
              }}
              className="categorybtn">
              Category
            </button>
          </div>
          <div className="availableSites">
            <p className="availability">Also Available on :-</p>
            <img src={Amazon} alt="" />
            <img src={Flipcard} alt="" />
          </div>
        </div>
        <div className="homeImgContainer2">
          <img src={NikeLogo} alt="Nike Image" />
        </div>
      </div>
    </>
  );
}

export default Home;
