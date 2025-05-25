import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CSS/Login.css';
const Login=()=>{
    const navigate=useNavigate();
    const [name,setName]=useState("")
    const [password,setPassword]=useState("");
    const handleSubmit=async (e)=>{
        e.preventDefault();
        
        const data={
            name,
            password
        }
        try{
            const response=  await fetch('http://localhost:5000/api/login',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(data)
            })
            console.log(response.json());
            if(response.ok){
                navigate('/maps');
            }
            else{
                alert("password mismatch");
            }
        }
        catch(error){
            alert(error)
        }
    }
    return(
        <div class="container">
        <div class="welcome">Welcome!</div><br/>
            <form onSubmit={handleSubmit}>
            <label htmlFor="Name">Enter your Name:
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </label><br/>
            <label htmlFor="password">Enter the password given:
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label><br/>
            <input type="submit" />
        </form>
        </div>
    )
}
export default Login;