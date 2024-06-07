import React,{useEffect,useState} from "react";
import "./Popular.css"
import Items from "../items/Items";
import axios from "axios";
const Popular = () =>{
    const [data,setdata]=useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:3030/popularinwomen");
            setdata(response.data);
          } catch (error) {
            console.log("Error", error);
          }
        };
      
        fetchData(); 
      
      }, []);
    return (
        <div className="popular">
           <h1>Popular in womens</h1>
           <hr/>
           <div className="popular-item">
            {
                data.map((item,i)=>{
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })
            }

           </div>
        </div>
    )
}

export default Popular;