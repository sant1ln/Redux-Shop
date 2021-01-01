import React from 'react'
import { Product } from './Product'

import '../styles/components/list_products.css'

export const ListProducts = () => {
    return (
        <div className="list_container">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    )
}
