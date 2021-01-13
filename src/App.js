import React from 'react'
import { Footer } from './Components/Footer'
import { Approuter } from './router/Approuter'

import './style.css'

export const App = () => {
    return (
        <div className="App_Container">
            
                <Approuter/>
            <Footer />
        </div>
    )
}
