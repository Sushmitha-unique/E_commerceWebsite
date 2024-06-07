import React,{useState,useContext} from "react";
import "./Navbar.css"
import {Link} from "react-router-dom"
import logo from "../../Assets/logo.png"
import cart_icon from "../../Assets/cart_icon.png"
import ShopContext from "../../Context/ShopContext";
const Navbar = () =>{
    const [menu,setmenu]= useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)
return(
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo}  alt=""/>
            <p>Shopping</p>
        </div>
        <ul className="nav-menu">
              <li onClick={()=>setmenu("shop")}><Link  style={{textDecoration:"none"}} to="/">Shop</Link>{menu ==="shop"?<hr/>:<></>}</li>
              <li onClick={()=>setmenu("men")}><Link style={{textDecoration:"none"}}  to="/men">Men</Link>{menu ==="men"?<hr/>:<></>}</li>
              <li onClick={()=>setmenu("women")}><Link style={{textDecoration:"none"}} to="/women">Women</Link>{menu ==="women"?<hr/>:<></>}</li>
              <li onClick={()=>setmenu("kids")}><Link  style={{textDecoration:"none"}} to="/kids">Kids</Link>{menu ==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');
                window.location.replace('/')
            }}>LogOut</button>: <Link to="/login"><button>Login</button></Link>}
       
        <Link to="/cart"> <img src={cart_icon} alt="cartimg"/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
)
}
export default Navbar