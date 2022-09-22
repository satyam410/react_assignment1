import React from 'react'
import data from './components/front/back/data/data'
import Header from './components/front/header/Header'
import Content from './components/front/header/routes/Routes'
import {BrowserRouter as Router} from "react-router-dom"
import { useState } from 'react'
const App = () => {

  const { productItems } = data;
  const [cartItems , setCartItems] = useState([]);

  const handleAddProduct = (product) =>{
    const productExist = cartItems.find((item) => item.id === product.id)
    if(productExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? {...productExist,quantity:productExist.quantity+1}:item)
      );
    }else{
      setCartItems([...cartItems,{...product , quantity:1}]);
      }
    }
  const handleRemoveProduct = (product) =>{
      const productExist = cartItems.find((item) => item.id === product.id)
      if(productExist.quantity === 1){
        setCartItems(cartItems.filter((item)=>item.id !== product.id));
      }else{
        setCartItems(
          cartItems.map((item)=>
          item.id === product.id ? {...productExist,quantity:productExist.quantity - 1}:item
          )
        );
      }
  }
  return (
    <div>
      <Router>
        <Header cartItems={cartItems}/>
        <Content productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
      </Router>
    </div>
  )
}

export default App
