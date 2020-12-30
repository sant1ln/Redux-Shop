import React from 'react'
import Static from '../assets/default.png'
export const Checkout = () => {
    return (
        <div className="checkout-container">
            <ul className="checkout-list">
                <li>
                    <p>product</p>
                    <img src={Static} alt=""/>
                </li>
                <li>
                    <p>product</p>
                    <img src={Static} alt=""/>
                </li>
                <li>
                    <p>product</p>
                    <img src={Static} alt=""/>
                </li>
            </ul>
            <div className="checkout_confirm">
                <button>Cancel</button>
                <button>Pay</button>
            </div>
        </div>
    )
}
