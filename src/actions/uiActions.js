export const addToCart = (data,i) =>({
    type: 'ADD_TO_CART',
    payload: {
        data,
        ...data.idCart = i
    }
})


export const removeToCart = (id) =>({
    type: 'REMOVE_TO_CART',
    payload: {
        id
    }
})

export const cancelPurchase = () =>({
    type: 'CANCEL_PURCHASE',
})

export const emptyCart = () => ({
    type: 'EMPTY_CART'
})


export const toggleView = () => ({
    type: 'TOGGLE_REACAP'
})
