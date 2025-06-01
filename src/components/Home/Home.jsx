import React, { useEffect, useState } from 'react'
import './Home.css'
import { getAllProducts } from '../../ApiService/api'

function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
       const fetchProducts = async () => {
         const data = await getAllProducts();

         setProducts(data);
       }
         fetchProducts()
    }, [])
  return (
    <div className='product-grid'>
        {
            products.map((product) => (
                <div className='product' key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>
                        <span className='price'>${product.price}</span>
                    </p>
                    <button>Product Details</button>
                </div>
            ))
        }
    </div>
  )
}

export default Home
