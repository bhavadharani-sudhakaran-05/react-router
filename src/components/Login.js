import React from "react";
import  { useNavigate } from "react-router-dom";
export default function Login() {
    //hooks method 
   const navigate= useNavigate();
    function onSubmit()
    {
        //code for checking user credentials and if valid , logging in
        navigate('/dashboard');
    }
    return <>
    <h1>Welcome to the Login Page</h1>
    <p>Please enter your credentials to log in.</p>
    <button onClick={onSubmit}>Login</button>
    </> }