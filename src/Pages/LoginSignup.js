import React,{useState} from "react";
import "./LoginSignup.css"
import axios from "axios";
const LoginSignup = () =>{
    const [state,setstate] = useState("login")
    const [formdata,setformdata] = useState ({
        name:"",
        password:"",
        email:""
    })
    const changeHandler = (e) =>{
    setformdata({...formdata,[e.target.name]:e.target.value })
    }
     const login = async () =>{
      console.log("login executed",formdata)
      try{
        const response = await axios.post("http://localhost:3030/login",{
            "email":formdata.email,
            "password":formdata.password
        })
        console.log(response.data)
        if(response.data.success)
            {
                localStorage.setItem('auth-token',response.data.token)
                window.location.replace("/")
            }
            else{
               alert(response.data.error)
            }
       }

       catch(err){
        console.log("error message"+err)
       }
     }
     const signup = async () =>{
        console.log("signup executed",formdata)
       try{
        const response = await axios.post("http://localhost:3030/signup",{
            "name":formdata.name,
            "email":formdata.email,
            "password":formdata.password
        })
        console.log(response.data)
        if(response.data.success)
            {
                localStorage.setItem('auth-token',response.data.token)
                window.location.replace("/")
            }
            else{
               alert(response.data.error)
            }
       }

       catch(err){
        console.log("error message"+err)
       }
     }
    return (
        <div className="loginsignup"> 
        <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-feilds">
        {state==="signup"?<input type="text" name="name" value={formdata.name} onChange={changeHandler} placeholder="Your Name" required />:<></>} 
         <input type="email"  name="email" value={formdata.email} onChange={changeHandler} placeholder="Your email" required/>
         <input type="password"  name="password" value={formdata.password} onChange={changeHandler} placeholder="Your password" required/>
        </div>
        <button onClick={()=>{state ==="login"?login():signup()}}>Continue</button>
        {state==="signup"?<p className="loginsignup-login">Already have an account ? <span onClick={()=>{setstate("login")}}>Login here</span></p>:  
          <p className="loginsignup-login">create an account? <span onClick={()=>{setstate("signup")}} >click here</span></p>}
        
    
         <div className="loginsignup-agree">
            <input type="checkbox" name="" id=""/>
            <p>By continuing , i agree to the terms of use & privacy policy</p>
         </div>
        </div>
        </div>
    )
}

export default LoginSignup;