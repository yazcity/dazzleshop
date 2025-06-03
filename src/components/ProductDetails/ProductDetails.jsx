import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { Link, useParams } from 'react-router-dom'
import { getAllProductId } from '../../ApiService/api';
function ProductDetails() {

    const { id } = useParams();
    // const [productDetails, setProductDetails] = useState(null)
    const [productDetails, setProductDetails] = useState({})
    useEffect(() => {
        const fetchProductDetails = async () => {
            const data = await getAllProductId(id)
            console.log(data)
            setProductDetails(data)

        }
        fetchProductDetails()
    }, [id])

    const handleBuyNow = ()=>{
        window.confirm("The product is out of stock!")
    }
    // if (!productDetails) {
    //     return <div>Loading...</div>;
    //   }


    return (
        <div className='product-details-container'>
            <img src={productDetails.image} alt='image' className='product-img' />

            <div className='product-info'>
                <h2 className='product-title'>
                    {productDetails.title}
                </h2>
                <p className='product-description'> {productDetails.description}</p>
                <p className='product-price'>{productDetails.price}</p>
                <button onClick={handleBuyNow} className='buy-now-btn'>Buy Now</button>
                <Link to='/'>
                    <button className='go-back-btn'>Go back Home</button>
                </Link>

            </div>
        </div>
    )
}

export default ProductDetails
