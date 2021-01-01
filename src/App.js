import React from 'react'
import { Footer } from './Components/Footer'
import { Navbar } from './Components/Navbar'
import { Approuter } from './router/Approuter'

import './style.css'

export const App = () => {
    return (
        <div className="App_Container">
            <Navbar/>
                <Approuter/>
            <Footer />
        </div>
    )
}
