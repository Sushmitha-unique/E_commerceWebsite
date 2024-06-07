import React from "react";
import "./Offer.css"
import Exclusive from "../../Assets/exclusive_image.png"
const  Offer = () =>{
    return (
        <div className="offers">
         <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLER PRODUCT</p>
            <button>Check Now</button>
         </div>
         <div className="offers-right">
            <img src={Exclusive} alt="img"/>
         </div>
        </div>
    )
}

export default Offer;