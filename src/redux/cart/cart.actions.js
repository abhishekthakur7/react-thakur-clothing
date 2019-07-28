import CartActionTypes from './cart.action.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN //payload is optional
});

export const addItem = (itemToBeAddedInCart) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: itemToBeAddedInCart
})
