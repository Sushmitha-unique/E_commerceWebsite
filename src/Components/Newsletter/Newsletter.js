import React from "react";
import "./Newsletter.css"
const Newsletter = () =>{
    return (
        <div className="newsletter">
            <h1>Get Exclusive Offer on your mail</h1>
            <p>Subscribe to NewsLetter and stay updated</p>
            <div>
                <input type="text" placeholder="Enter your email id"/>
                <button>Subscribe </button>
            </div>

        </div>
    )
}

export default Newsletter;