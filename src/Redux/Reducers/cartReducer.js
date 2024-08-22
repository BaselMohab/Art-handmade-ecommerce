import { ADD_TO_CART, UPDATE_PRODUCT_QUANTITY, REMOVE_PRODUCT_FROM_CART } from "../actionTypes";

const initialState = {
    cartItems: [],
};


export const cartReducer = ( state = initialState, action) => {
    switch (action.type){

        case ADD_TO_CART:{
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id)
            if(existingItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => 
                        item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item
                )
                }
            }else{
                return {
                    ...state,
                    cartItems: [...state.cartItems, {...action.payload, quantity: 1}]
                }
            }
        }

        case UPDATE_PRODUCT_QUANTITY:{
            return {
                ...state,
                cartItems: state.cartItems.map((item) => item.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item
            )
            }
        }

        case REMOVE_PRODUCT_FROM_CART:{
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload)
            }
        }

        default: 
            return state;
    }
}