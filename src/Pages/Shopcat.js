import React,{useContext} from "react";
import "./Shopcat.css"
import  ShopContext  from "../Context/ShopContext";
import drop_down from "../Assets/dropdown_icon.png"
import Items from "../Components/items/Items";
const Shopcat = (props) =>{
    const {all_product} = useContext(ShopContext)
    return (
        <div className="shop-cat ">
         <img  className="shopcat-banner" src={props.banner} alt="img"/>
         <div className="shopcat-indexsort">
           <p>
            <span>Showing 1-12</span> out of 36 products
           </p>
           <div className="shopcat-sort">
            sort by <img src={drop_down} alt="imgtag"/>
           </div>
         </div>
         <div className="shopcat-products">
          {all_product.map((item,i)=>{
           if(props.category === item.category)
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            else
            return null;
          })}
         </div>
         <div className="shopcat-loadmore">
          Explore More
         </div>
        </div>
    )
}

export default Shopcat;