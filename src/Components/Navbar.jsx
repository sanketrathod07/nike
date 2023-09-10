import React from "react";
import image from "../images/brand_logo.png";

function Navbar(){
    return (<>
        
        <div className="navbar">
            <div className="logo">
                <img src={image} alt="Logo Hai re Baba!!" />
            </div>
            <div className="navMenu">
                <a href="#">MENU</a>
                <a href="#">LOCATION</a>
                <a href="#">ABOUT</a>
                <a href="#">CONTACT</a>
            </div>
            <div className="login">
                <button>LOGIN</button>
            </div>
        </div>
    </>)
}
export default Navbar;