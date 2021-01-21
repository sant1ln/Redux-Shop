import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/not_product.css'

export const NotProduct = () => {
    return (
        <div className="not_container">
            <p>You don't have products in the cart</p>
            
            <Link to="/">Start to add now!</Link>
        </div>
    )
}
