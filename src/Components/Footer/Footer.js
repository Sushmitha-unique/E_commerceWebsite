import React from "react";
import "./Footer.css";
import footerlogo from "../../Assets/logo_big.png"
import insta from "../../Assets/instagram_icon.png"
import print from "../../Assets/pintester_icon.png"
import what from "../../Assets/whatsapp_icon.png"
const Footer = () =>{
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footerlogo} alt="logo"/>
                <p>SHOPPING</p>
            </div>
           <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
           </ul>
           <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={insta} alt="icon"/>
            </div>
            <div className="footer-icons-container">
                <img src={print} alt="icon"/>
            </div>
            <div className="footer-icons-container">
                <img src={what} alt="icon"/>
            </div>
           </div>
           <div className="footer-copyrights">
            <hr/>
            <p>copyrights @ 2024 - All rights reserved</p>

           </div>
        </div>
    )
}

export default Footer;