export const addUser = (data) =>({
    type: 'ADD_USER',
    payload: data
})

export const addNewOrder = (newOrder) =>({
    type: 'ADD_NEW_ORDER',
    payload: newOrder
})