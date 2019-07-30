import CartActionTypes from './cart.action.types';
import { addItemToCart, removeItemsFromCart } from './cart.utils';

const INITIAL_VALUE = {
    hidden: true,
    cartItems: []
};

const CartReducer = (prevState = INITIAL_VALUE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...prevState,
                hidden: !prevState.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...prevState,
                cartItems: addItemToCart(prevState.cartItems, action.payload) //Add the items (payload) to the existing cart array
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...prevState,
                cartItems: prevState.cartItems.filter(cartItem => cartItem.id !== action.payload.id) //filter will return only those items whose id doesn't match with input item and update the state
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...prevState,
                cartItems: removeItemsFromCart(prevState.cartItems, action.payload)
            }
        default:
            return prevState;
    }
}

export default CartReducer;