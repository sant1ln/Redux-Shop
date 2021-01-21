import { initialState } from "../initialState";


export const uiReducers = (state=initialState,action) =>{
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log(action.payload)
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
        default: return state
            
    }
}