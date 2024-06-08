import React,{useState,useEffect} from "react";
import "./Newcollections.css"
import axios from "axios";
import Items from "../items/Items";
const Newcollections=()=>{
    const [collections,setcollections]=useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("https://backend-e24l.onrender.com/newcollection");
            setcollections(response.data);
          } catch (error) {
            console.log("Error", error);
          }
        };
      
        fetchData(); 
      
      }, []);
      
    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className="collections">
                {collections.map((item,i)=>{
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>

        </div>
    )
}

export default Newcollections;