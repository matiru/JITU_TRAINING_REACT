import React from "react";
import "./mid-header.css";
import { useState } from "react";





const MidHeader = ({products}) => {


    // on input change search for the product title  from the products array
    // if the product title matches the input value then display the product
    // if the product title does not match the input value then display no product found

    const [searchItem, setSearchItem] = useState("");
  

const searchProduct = products.filter
(product => product.title.toLowerCase().includes(searchItem.toLowerCase()));




    const handleChange = (e) => {
        setSearchItem(e.target.value);
    
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchItem("");
    }


    return (
    <div className="banner">
    <h1 className="banner_text"> Search Over a million products on Shopping.com</h1>
    
    <div className="search">
    <label>search by</label>
    <input type="text" onChange={handleChange} className="searchTerm" placeholder=" | What are you looking for?" />
    <button type="submit" onClick={handleSubmit} className="searchButton" >Search</button>

    </div>

 
    {searchItem.length > 0 && (
        <ul>
            {searchProduct.map(product => (
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>
    )}
     </div>
       

    );
    }

    export default MidHeader;
