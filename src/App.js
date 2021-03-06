import React from 'react'
import { Provider } from 'react-redux'
import { Approuter } from './router/Approuter'
import { store } from './store/store'

import './style.css'

export const App = () => {
    return (
        <Provider store={store}>
            <div className="App_Container">
                <Approuter/>
            </div>
        </Provider>
    )
}
