import React from "react";
import "./mid-footer.css";
import ger from "../RESOURCES/germanflag.png";
import uk from "../RESOURCES/ukflag.png";
import ita from "../RESOURCES/italyflag.png";
import fra from "../RESOURCES/franceflag.png";
import us from "../RESOURCES/usaflag.png";
import spa from "../RESOURCES/spainflag.png";



const MidFooter = () => {

    return (
    
            <div className="mid_footer">
            
            <span>
                <ul className="mid_foot">
                    <li><a href="">About</a></li>
                    <p></p>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Jobs</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">User Agreement</a></li>
                    <li><a href="">Return and Refund Policy</a></li>
                </ul>
            </span>

             
            <span>
                <ul className="mid_foot">
                    <li><a href="">Helpful Stuff</a></li>
                    <p></p>
                    <li><a href="">Site Index</a></li>
                    <li><a href="">Top Products</a></li>
                    <li><a href="">Top Deals</a></li>
                </ul>
              
            </span>
             
            <span>
                <ul className="mid_foot">
                    <li><a href="">eBay Family</a></li>
                    <p></p>
                    <li><a href="">eBay</a></li>
                    <li><a href="">eBay User Agreement</a></li>
                    <li><a href="">Free Local Classifieds</a></li>
            
                </ul>
            </span>
            
            <span>
                <ul className="mid_foot">
                    <li><a href="">Shopping Sites</a></li>
                    <p></p>
                    <li><img className="flagicon" src ={fra}></img><a href="">France</a></li>
                    <li><img className="flagicon" src ={ger}></img><a href="">Germany</a></li>
                    <li><img className="flagicon" src ={uk}></img><a href="">United Kingdom</a></li>
                    <li><img className="flagicon" src ={ita}></img><a href="">Italy</a></li>
                    <li><img className="flagicon" src ={spa}></img><a href="">Spain</a></li>
                    <li><img className="flagicon" src ={us}></img><a href="">Usa</a></li>
                </ul>
            </span>


            </div>
    
    
    )

}

export default MidFooter;