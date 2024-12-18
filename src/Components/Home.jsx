import React from 'react'
import Product from './Product'
import { products } from '../data/data'

const Home = () => {
    
  return (
    <div>
      <Product products ={products}  />/
    </div>
  )
}
export default Home
