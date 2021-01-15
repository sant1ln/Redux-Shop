import React from 'react'
import { Product } from './Product'

import '../styles/components/list_products.css'
import { useSelector } from 'react-redux'

export const ListProducts = () => {

    const {products} = useSelector(state => state.ui)
    
    return (
        <div className="list_container">
            {products.map(product =>(
                <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    desc={product.description}
                    img={product.img}
                    price={product.price}
                />
            ))}
            
        </div>
    )
}
