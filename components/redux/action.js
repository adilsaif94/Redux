import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_ITEM_QUANTITY} from './constant'

export function addToCart(item){
    return{
        type:ADD_TO_CART,
        data:item
    }
}

export function removeFromCart(item){
    return{
        type:REMOVE_FROM_CART,
        data:item
    }
}

export function updateItemQuantity(id, quantity) {
    return {
        type: UPDATE_ITEM_QUANTITY,
        payload: { id, quantity }
    }
}

