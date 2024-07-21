// import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_ITEM_QUANTITY } from './constant'

// const initialState = [];

// export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_TO_CART:
//             return [
//                 ...state,
//                 action.data
//             ]
//         case REMOVE_FROM_CART:
//             return state.filter(item => item.id !== action.data);
//             case UPDATE_ITEM_QUANTITY:
//                 return state.map(item => 
//                     item.id === action.payload.id 
//                         ? { ...item, quantity: action.payload.quantity }
//                         : item
//                 );
//         default:
//             return state
//     }

// }

import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_ITEM_QUANTITY } from './constant';

const initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            // Check if the item already exists in the cart
            const existingItemIndex = state.findIndex(item => item.id === action.data.id);
            if (existingItemIndex >= 0) {
                // If it exists, update the quantity
                const updatedState = state.map((item, index) => 
                    index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
                );
                return updatedState;
            }
            // If it doesn't exist, add it with a quantity of 1
            return [
                ...state,
                { ...action.data, quantity: 1 }
            ];
        case REMOVE_FROM_CART:
            return state.filter(item => item.id !== action.data.id);
        case UPDATE_ITEM_QUANTITY:
            return state.map(item => 
                item.id === action.payload.id 
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
        default:
            return state;
    }
}
