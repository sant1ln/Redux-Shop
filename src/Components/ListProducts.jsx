import React from 'react'
import { Product } from './Product'

import '../styles/components/list_products.css'
import { useSelector } from 'react-redux'

export const ListProducts = () => {

    const {products,searched} = useSelector(state => state.ui)
    
    return (
        <div className="list_container">
            {(searched.length>=1)
             ?searched.map(product =>(
                <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    desc={product.description}
                    img={product.img}
                    price={product.price}
                />
            ))
            :products.map(product =>(
                <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    desc={product.description}
                    img={product.img}
                    price={product.price}
                />
            ))
            }
            
        </div>
    )
}
