import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN //payload is optional
});

export const addItem = (itemToBeAddedInCart) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: itemToBeAddedInCart
});

export const clearItemFromCart = (itemToBeRemoved) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: itemToBeRemoved
});

export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
});