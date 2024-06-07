import React,{useContext} from "react";
import "./ProductDisplay.css"
import Star from "../../Assets/star_icon.png"
import StarDull from "../../Assets/star_dull_icon.png"
import ShopContext from "../../Context/ShopContext";
const ProductDisplay = (props) =>{
    const {product}= props;
    const {Addtocart}=useContext(ShopContext)
    return (
        <div className="productDisplay">
            <div className="productDisplay-left">
                <div className="display-img-list">
                  <img src={product.image} alt=""/>
                  <img src={product.image} alt=""/>
                  <img src={product.image} alt=""/>
                  <img src={product.image} alt=""/>
                </div>
                <div className="display-img">
                  <img className="display-main-img" src={product.image} alt=""/>
                </div>
            </div>
            <div className="productDisplay-right">
             <h1>{product.name}</h1>
             <div className="productDisplay-right-star">
                  <img src={Star} alt=""/>
                  <img src={Star} alt=""/>
                  <img src={Star} alt=""/>
                  <img src={Star} alt=""/>
                  <img src={StarDull} alt=""/>
                  <p>(122)</p>
             </div>
             <div className="product-display-right-prices">
             <div className="product-display-right-prices-old">${product.old_price}</div>
             <div className="product-display-right-prices-new">${product.new_price}</div>
            </div>
            <div className="product-display-right-prices-description">
            In contemporary fashion, dresses are constantly evolving. 
            Designers experiment with new fabrics, cuts, and styles. 
            Sustainability has also become a key trend, with an emphasis 
            on eco-friendly materials and ethical production practices.
            </div>
            <div className="product-display-right-size">
                <h1>Select Size</h1>
                <div className="product-display-right-sizes">
                  <div>xS</div>
                  <div>S</div>
                  <div>M</div>
                  <div>L</div>
                  <div>XL</div>
                  <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{Addtocart(product.id)}}>ADD TO CART</button>
            <p className="product-display-right-category"><span>Category:</span>Women,T-shirt,crop Tops</p>
            <p className="product-display-right-category"><span>Tags:</span>Modern ,Latest</p>
        </div>
        </div>
    )
}

export default ProductDisplay;