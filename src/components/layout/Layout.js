import React from 'react';
import Header from "./Header";
import "./style.scss"
import Footer from './Footer';
// import Footer from "./Footer";

export default function Layout(props) {
return (
    <div className="app-holder">        
        <Header/>
        {props.children}        
        <Footer/>
    </div>
);
}