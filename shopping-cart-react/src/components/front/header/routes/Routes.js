import React from 'react'
import Product from '../products/Product'
import {Route , Routes} from "react-router-dom"
import Cart from '../Cart/Cart'
const Content = ({productItems , cartItems, handleAddProduct, handleRemoveProduct}) => {
    console.log(productItems);
  return (
    <div>
    <Routes>
        <Route path='/' element={<Product productItems={productItems} handleAddProduct={handleAddProduct}/>} />
        <Route path='/cart' element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>} />
    </Routes>
    </div>
  )
}

export default Content