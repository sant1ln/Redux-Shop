import React from 'react'
import { Link } from 'react-router-dom'
import Static from '../assets/default.png'

import '../styles/components/product.css'
export const Product = () => {
    return (
        <Link to="/product" className="product_container">
            <img src={Static} alt=""/>
            <div className="product_info">
                <div className="product_info_title">
                    <h4>product-title</h4>
                    <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="product_info_data">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <span>$15</span>
                </div>
            </div>
        </Link>
    )
}
