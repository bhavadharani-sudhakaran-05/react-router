import React from "react";
//for getting the route parameters i have to use hooks func "useParams" from "react-router-dom"
import { useParams } from "react-router-dom";
export default function User() {
    const { id } = useParams();
     //destructuring to get the id param from the route
    return (
        <>
            <h1>User Profile page</h1>
            <p>User ID is <b>{id}</b></p>
        </>
    );
}