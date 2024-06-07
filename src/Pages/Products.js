import React,{useContext} from "react";
import ShopContext from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Specific from "../Components/Specific/Specific";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Descriptionbox from "../Components/Descriptionbox/Descriptionbox";
const Products = () =>{
    const {all_product}=useContext(ShopContext)
    const {productId} = useParams()
    const product = all_product.find((e)=> e.id  === Number(productId))  // productId is string converted to a number
    return (
        <div>
          <Specific  product={product}/>
          <ProductDisplay  product={product} />
          <Descriptionbox/>
        </div>
    )
}

export default Products;