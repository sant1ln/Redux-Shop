import React from 'react'

export const Success = () => {
    return (
        <div className="success_container">
            <div className="alert"></div>
            <div className="shop_info">
                <div className="shop_info_product">
                    <ul>
                        <li>product</li>
                        <li>product</li>
                        <li>product</li>
                        <li>product</li>
                    </ul>
                </div>
                <hr/>
                <div className="shop_info_user">
                    <h4>User name</h4>
                    <p>Direcction</p>
                    <p>Time delivery</p>
                </div>
            </div>
        </div>
    )
}
