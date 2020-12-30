import React from 'react'
import { Product } from '../Components/Product'

export const ProductInfo = () => {
    return (
        <div className="productInfo_container">
            <Product/>
            <div className="productInfo_data"></div>
        </div>
    )
}
