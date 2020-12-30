import React from 'react'
import Static from '../assets/default.png'


export const Product = () => {
    return (
        <div className="product_container">
            <img src={Static} alt=""/>
            <div>
                <h4>product-title</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <span>$15</span>
            </div>
        </div>
    )
}
