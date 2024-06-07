import React,{useContext} from "react";
import "./Cartitems.css"
import ShopContext from "../../Context/ShopContext";
import Remove from "../../Assets/cart_cross_icon.png"
const Cartitems = () =>{
    const {all_product,cart,Removefromcart,getTotalcartAmount}=useContext(ShopContext);
    return (
        <div className="cartitems">
        <div className="cartitems-format-main">
         <p>Products</p>
         <p>Title</p>
         <p>Price</p>
         <p>Quantity</p>
         <p>Total</p>
         <p>Remove</p>
        </div>
        <hr/>
          {all_product.map((e)=>{
          if(cart[e.id]>0)
            {
                return ( <div>
                <div className="cartitems-formate cartitems-format-main">
                    <img src={e.image} alt="" className="carticon-product-icon"/>
                    <p>{e.name}</p>
                    <p>{e.new_price}</p>
                    <button className="cartitem-quantity">{cart[e.id]}</button>
                    <p>{e.new_price*cart[e.id]}</p>
                    <img className="cartitem-remove-icon" src={Remove} onClick={()=>{Removefromcart(e.id)}} alt=""/>
                </div>
                <hr/>
               </div>)
            }
          })}
          <div className="cartitems-down">
             <div className="cartitem-total">
                <h1>cart total</h1>
                <div>
                    <div className="cartitems-total-items">
                        <p>Subtotal</p>
                        <p>{getTotalcartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-items">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-items">
                    <h3>Total</h3>
                    <h3>{getTotalcartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
             </div>
             <div className="cartitems-promocode">
                 <p>If you have promo code , Enter it here</p>
                 <div className="cartitems-promobox">
                    <input type="text" placeholder="promo code"/>
                    <button>Submit</button>
                 </div>
             </div>
          </div>
        </div>
    )
}

export default Cartitems;