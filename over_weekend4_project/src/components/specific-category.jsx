import React from "react";
import "./specific-category.css";
import cat from "../RESOURCES/img_1_1.jpg";



const SpecificCategory =({category}) =>{

    return(
        <div className="category">
            
      <div className="details">

      <p>  <a href="">{category}</a> </p>
      </div>
      <img src={cat} alt=""/>



        </div>

    )
}
export default SpecificCategory