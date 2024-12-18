import React from 'react'
import { products } from '../data/data'

const Product = (props) => {
  const {products} = props
  return (
    <div className='container'>
      <div className="row">
        {
          products.map((data) => {
            return (
              <div className='col-sm-6 col-md-4 col-lg-3 col-12 mb-3 mt-5' key={data.id}>
                <div className="card" style={{ width: '100%' }}>
                  <img src={data.image} className="card-img-top" style={{aspectRatio: 2/3, objectFit: "cover"}} alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <h6 className="card-title">Price: ${data.Price}</h6>
                    <p className="card-text">{data.description}</p>
                    <button className='btn btn-info mx-auto' style={{display: 'block',width: '70%',  }}>Purchase now</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default Product