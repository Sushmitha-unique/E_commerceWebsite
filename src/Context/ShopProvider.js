import React,{useState,useEffect} from "react";
import ShopContext from "./ShopContext";
import GetDefaultCart from "./GetDefaultCart";
import axios from "axios";

const ShopProvider = (props) =>{
    const [cart,setCart]=useState(GetDefaultCart());
    const  [all_product,setall_product]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:3030/allproducts");
            setall_product(response.data);
          } catch (error) {
            console.log("Error", error);
          }
        };
      const fetchCart = async () =>{
        const authToken = localStorage.getItem('auth-token');
        if (authToken) {
          try {
            const response = await axios.post(
              'http://localhost:3030/getcart',
              {},
              {
                headers: {
                  'Content-Type': 'application/json',
                  'auth-token': authToken,
                },
              }
            );
            setCart(response.data);
          } catch (error) {
            console.error('Error fetching cart:', error);
          }
        }
      }



        fetchData(); 
        fetchCart();
      
      }, []);
      
    const Addtocart = async (itemId)=>{
    setCart((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    if (localStorage.getItem('auth-token')) {
        try {
          const response = await axios.post('http://localhost:3030/addtocart', {
            itemid: itemId 
          }, {
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('auth-token') 
            }
          });
          console.log(response.data);
        } catch (error) {
          console.error("Error:", error);
        }
      }
      

    }
    const Removefromcart = async (itemId)=>{
        setCart((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if (localStorage.getItem('auth-token')) {
            try {
                const response = await axios.post('http://localhost:3030/removefromcart', {
                  itemid: itemId 
                }, {
                  headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('auth-token') 
                  }
                });
                console.log(response.data);
              } catch (error) {
                console.error("Error:", error);
              }
        }
        }
        const getTotalcartAmount = ()=>{
            let totalAmount = 0 ;
            for(const item in cart){
                if(cart[item]>0)
                    {
                        let itemInfo = all_product.find((product)=>product.id === Number(item))
                        totalAmount += itemInfo.new_price * cart[item];

                    }
                   
            }
            return totalAmount;
        }
        const getTotalCartItems =()=>{
            let totalitems=0;
            for(const item in cart){
                if(cart[item]>0){
                    totalitems+=cart[item];
                }
        }
        return totalitems;
    }
    const values ={all_product,cart,Addtocart,Removefromcart,getTotalcartAmount,getTotalCartItems};
return(
   <ShopContext.Provider value={values}>
    {props.children}
   </ShopContext.Provider>
)
}
export default ShopProvider;