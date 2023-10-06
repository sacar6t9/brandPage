import React from "react";

function Hero() {
  return (
    <div>
      <div className="hero container">
        <div className="hero-content">
          <h1> YOUR FEET DESERVE THE BEST </h1>
          <p>
          
            YOUR FEET DESERVE THE BEST AND WE ARE HERE TO PROVIDE HELP WITH OUT
            SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO PROVIDE HELP
            WITH OUT SHOES.
          </p>
          <div className="hero-btn">
            <button> Shop Me</button>
            <button className="secondary-btn">  Category</button>
          </div>
          <div className="shopping">
            <p>also available on</p>
            <div className="brand-icon">
              <img src="/images/amazon.png" alt="" />
              <img src="/images/flipkart.png" alt="" />
            </div>
          </div>
        </div>
        <div className="hero-Image">
          <img src="/images/shoe_image.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
