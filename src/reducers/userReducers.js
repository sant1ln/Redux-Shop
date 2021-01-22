import {userState } from "../initialState";
export const userReducers = (state=userState,action) =>{
    switch (action.type) {
        case 'ADD_USER':
            return{
                ...state,
                userInfo: action.payload
            }
        case 'ADD_NEW_ORDER':
            return{
                ...state,
                orders: action.payload
            }
        default: return state
          
    }
}