import React from "react";
import "./Descriptionbox.css"
const Descriptionbox = () =>{
    return (
        <div className="descriptionbox">
          <div  className="descriptionbox-nav">
          <div  className="descriptionbox-nav-box">Description</div>
          <div  className="descriptionbox-nav-box fade">Reviews(122)</div>
          </div>
          <div className="descriptionbox-description">
            <p>An eCommerce (electronic commerce) website is a platform 
                that allows businesses to conduct transactions over the internet.
                 These websites facilitate the buying and selling of goods and 
                 services online, offering a virtual storefront for customers 
                 to browse and purchase products from the comfort of their homes.</p>
                 <p>An eCommerce website is a powerful tool for businesses to reach
                     a broader audience, operate efficiently, and enhance customer
                      satisfaction. By leveraging the right features, technologies, 
                      and strategies, businesses can create a successful online
                       presence that drives sales and fosters growth.</p>
          </div>
        </div>
    )
}

export default Descriptionbox;