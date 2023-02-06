import React from "react";
import "./header.css";
import logo from "../RESOURCES/2331966.png";
import toggle from "../RESOURCES/toggle-icon.png";




const Header = ({categories}) => {

    return (
        <div className="header_container">
        <div className="header">
            <span className="header_logo">
            <img className="logo_img" src={logo}></img>
            <h1><a href="#">Shopping.com <sup>&reg;</sup> </a></h1></span>
            <span className="header_category"><p>All Categories</p>
            <img  className="toggle_img"src ={toggle}></img> 
            {/* <ul>
            {categories.map(category=><li key={categories.indexOf(category)}>{category}</li>)}
            </ul> */}
            </span>
            <span className="header_menu"><p><a href="#top_categories">Top Categories </a></p></span>
            <span className="header_menu"><p><a href="#top_deals">Top Deals </a></p></span>
            <span className="header_menu"><p><a href="#top_products">Top Products </a></p></span>
         </div>




        </div>
    );
    }

    export default Header;
