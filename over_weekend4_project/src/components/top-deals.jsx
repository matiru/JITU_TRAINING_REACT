import React ,{useEffect,useState}from 'react'
import './top-deals.css'
import Product from './product'



const TopDeals = ({products}) => {

    


products.sort(function(a, b){return 0.5 - Math.random()});






    return (
        <div id="top_deals">
        <div className="header1">
        <h1>Top Deals</h1>
        <p><a href="">See More</a></p>   
        </div>
        <div className="cat_deals">  
        {products.map((product,index)=>index<5 && <Product key={product.id} product={product}/>)} 
    

        </div>
        </div>
        

        
    )
}

export default TopDeals