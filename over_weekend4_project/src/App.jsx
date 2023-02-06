import React ,{useEffect,useState}from 'react'
import './App.css'
import Header from './components/header'
import MidHeader from './components/mid-header'
import TopCategories from './components/top-categories'
import TopDeals from './components/top-deals'
import TopProducts from './components/top-products'
import MidFooter from './components/mid-footer'
import Footer from './components/footer'



function App() {

  const[products,setProducts] = useState([])

  const getProducts = async()=>{
    let products = await fetch ("https://fakestoreapi.com/products")
    .then(res=>res.json());
    return products;
  
  }
  useEffect(() =>{
    ( function (){
     getProducts().then(res=>setProducts(res))
  
  
    } )() 
  
    console.log(products)
  
  },[])


const[categories,setCategories] = useState([])

const getCategories = async()=>{
  let categories = await fetch ("https://fakestoreapi.com/products/categories")
  .then(res=>res.json());
  return categories;

}
useEffect(() =>{
  ( function (){
   getCategories().then(res=>setCategories(res))


  } )() 

  console.log(categories)

},[])












  return (
    <div className="App">
      <Header categories={categories} />
      <MidHeader products={products}/>
      < TopCategories categories={categories}/>
      < TopDeals products={products}/>
      < TopProducts products={products}/>
      < MidFooter/>
      < Footer/>
     
    </div>
  )
}

export default App
