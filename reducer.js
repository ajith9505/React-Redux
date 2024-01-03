import { INCREASE_QUANTITY, DECREASE_QUANTITY } from "./actions";
import data from "./product.json"

const initialState = {
    products: [...data.products],
    quantity: 1
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE_QUANTITY:
            return {
                ...state, products: state.products.map(product => {
                    product.id === action.payload ? {
                        ...product, quantity: state.quantity + 1, price:
                            (state.quantity + 1) * product.price
                    } : product
                })
            };

        case DECREASE_QUANTITY:
            return {
                ...state, products: state.products.map(product => {
                    product.id === action.payload ? {
                        ...product, quantity: Math.max(1, state.quantity - 1), price :
                        Math.max(1, state.quantity - 1) * product.price
                    } : product
                })
            };

        // case UPDATE_PRICE:
        //     return {
        //         ...state, products: state.products.map(product => {
        //             product.id === action.payload ? { ...product, price: product.price * state.quantity } : product
        //         })
        //     };

        default:
            return state;
    }
}

export default rootReducer;