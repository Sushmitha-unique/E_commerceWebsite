import React from "react";
import "./Hero.css"
import hand_icon from "../../Assets/hand_icon.png"
import arrow from "../../Assets/arrow.png"
import hero_img from "../../Assets/hero_image.png"

const Hero = () =>{
    return (
        <div>
          <div className="hero">
            <div className="hero-left">
             <h2>New Arrival only</h2>
             <div>
                <div className="hand-hand-icon">
                    <p>new</p>
                  <img src={hand_icon} alt="icon"/>
                </div>
                <p>Collections</p>
                <p>For every one</p>
             </div>
             <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow} alt="icon"/>
             </div>
            </div>
            <div className="hero-right">
              <img src={hero_img} alt="icon"/>
            </div>
          </div>
        </div>
    )
}

export default Hero;