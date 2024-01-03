
//Action type
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

//Action Creater

export const increaseQuantity = id => ({
    type: INCREASE_QUANTITY,
    payload: { id }
});

export const decreaseQuantity = id => ({
    type: DECREASE_QUANTITY,
    payload: { id }
});

// export const updatePricce = id => ({
//     type: UPDATE_PRICE,
//     payload: { id }
// });