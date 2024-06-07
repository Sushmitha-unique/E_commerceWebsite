import React from "react";
const GetDefaultCart = () =>{
    let cart ={};
    for(let index=0;index< 300+1;index++){
        cart[index]=0;
    }
    return cart;
}

export default GetDefaultCart;