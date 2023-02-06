import React ,{useEffect,useState}from "react";
import './top-categories.css'
import SpecificCategory from './specific-category'




const TopCategories = ({categories}) => {


    
    

    return (
        <div id="top_categories">
        <div className="header1">
        <h1>Top Categories</h1>
        <p><a href="">See More</a></p>   
        </div>
        <div className="categories">

        {categories.map(category=>
    <SpecificCategory  key={categories.indexOf(category)} category={category} />)}
        </div>
        </div>
        

        
    )
}

export default TopCategories