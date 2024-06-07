import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import {Routes,Route} from "react-router-dom";
import Shop from "../src/Pages/Shop"
import Shopcat from "../src/Pages/Shopcat"
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Assets/banner_mens.png"
import women_banner from "./Assets/banner_women.png"
import kids_banner from "./Assets/banner_kids.png"

const App = () =>{
    return(
        <div>
         <Navbar/>
 
         <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="/men" element={<Shopcat banner={men_banner} category="men"/>}/>
            <Route path="/women" element={<Shopcat banner={women_banner} category="women"/>}/>
            <Route path="/kids" element={<Shopcat banner={kids_banner} category="kid"/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/:productId" element={<Products/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<LoginSignup/>}/>
         </Routes>
   
         <Footer/>
        </div>
    )
}
export default  App;