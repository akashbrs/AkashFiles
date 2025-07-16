import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Service from "./Service";
function Navbar(){
    return(
        <>
        <Login></Login>
        <Logout></Logout>
        <Service></Service>
        </>
    )
}