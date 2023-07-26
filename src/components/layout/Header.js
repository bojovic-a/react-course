import React from "react";
import logo from "../../img/bluegrid-logo.svg"
import { Link } from "react-router-dom";
import "./style.scss";

export default function Header() {
    return (        
        <div className="header">            
            <div className="logo-holder">
                <img src={logo} alt="logo"/>
            </div>
            <nav className="main-nav">                
                <li className="main-nav-link">
                    <Link to="/">Home</Link>
                </li>
                <li className="main-nav-link">
                    <Link to="/about">About</Link>
                </li>
                <li className="main-nav-link">
                    <Link to="/login">Login</Link>
                </li>
            </nav>             
        </div>
    );
}