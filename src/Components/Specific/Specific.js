import React from "react";
import "./Specific.css";
import arrow from "../../Assets/breadcrum_arrow.png"
const Specific = (props) =>{
    const {product} = props;
    return (
        <div className="specific"> 
         Home<img  src={arrow} alt="" />Shop<img  src={arrow} alt="" />{product.category}<img  src={arrow} alt="" />{product.name}
        </div>
        
    )
}

export default Specific;