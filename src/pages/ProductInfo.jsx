import React from 'react'
import Static from '../assets/default.png'

import '../styles/pages/product_info.css'
export const ProductInfo = () => {
    return (
        <div className="productInfo_container">
            <img src={Static}/>
            <div className="productInfo_data"></div>
        </div>
    )
}
