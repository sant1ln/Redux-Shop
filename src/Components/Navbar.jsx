import React from 'react'
import '../styles/components/navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/" className="navbar_title">
                <h1>Redux<br/><span>Shop</span></h1>
            </a>
            <form className="navbar_">
                <input type="Busca algo!"/>
            </form>
            <div className="navbar_buttons">
                <i className="fas fa-shopping-cart"></i>
                <i className="fas fa-user"></i>
            </div>
        </nav>
    )
}
