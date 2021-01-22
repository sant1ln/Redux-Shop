import React from 'react'
import '../styles/components/checkout_basic.css'
export const CheckoutBasic = ({name,price}) => {
  
    return (
          <div className="container_items">
            <li className="list_items">
                <p>{name}</p>
                <p>${price}</p>
            </li>
            <hr/>
          </div>
            
            
    )
}
