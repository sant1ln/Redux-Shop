import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../actions/uiActions'
import Static from '../assets/default.png'

import '../styles/components/product.css'
export const Product = () => {
    const dispatch = useDispatch()

    const add = () =>{
        dispatch(addToCart())
    }

    return (
        <div  className="product_container">
            <img src={Static} alt=""/>
            <div className="product_info">
                <div className="product_info_title">
                    <h4>product-title</h4>
                    <i 
                    onClick={add}
                    className="fas fa-shopping-cart"></i>
                </div>
                <div className="product_info_data">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <span>$15</span>
                </div>
            </div>
        </div>
    )
}
