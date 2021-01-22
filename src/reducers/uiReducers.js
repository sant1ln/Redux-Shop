import {uiState } from "../initialState";


export const uiReducers = (state=uiState,action) =>{
    switch (action.type) {
        case 'ADD_TO_CART':
            return{
                ...state,
                cart:[
                    ...state.cart,
                   {...action.payload.data},
                ]
            }
        case 'REMOVE_TO_CART':
            return{
                ...state,
                cart: state.cart.filter(
                    item => (item.idCart !== action.payload.id)
                )
            }

        case 'CANCEL_PURCHASE':
            return{
                ...state,
                cart: []
            }
        case 'EMPTY_CART':
            return{
                ...state,
                cart: []
            }
        case 'TOGGLE_REACAP':
            let acutalState = state.showRecap
            console.log(acutalState);
            return{
                ...state,
                showRecap: !acutalState
            }
        default: return state
            
    }
}