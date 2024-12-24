import React, { useEffect, useState } from 'react'
import { products } from '../data/data'
import axios from 'axios'

const Product = () => {
  const [products, setProduct]=useState([])
  const url = "https://fakestoreapi.com/products"
  // const fetchdata = ()=>{
  //   fetch(url).then((response)=>response.json()).then((result)=>setProduct(result))
  // }
  // useEffect(()=>{
  //   fetchdata()
  // }, [])
  const fetchdata = async()=>{
    await axios.get(url).then((result)=>setProduct(result.data))
  }
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div>
      {products.map((x)=>{
        return(
          <div key={x.id}>
            <h1>{x.title}</h1>
            <img src={x.image} alt={x.title} />
            <p>{x.description}</p>
            <h3>${x.price}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Product