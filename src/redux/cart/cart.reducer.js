import CartActionTypes from './cart.action.types';
import {addItemToCart} from './cart.utils';

const INITIAL_VALUE= {
    hidden: true,
    cartItems: []
};

const CartReducer = (prevState = INITIAL_VALUE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...prevState,
                hidden : !prevState.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...prevState,
                cartItems: addItemToCart(prevState.cartItems, action.payload) //Add the items (payload) to the existing cart array
            }
        default:
            return prevState;
    }
}

export default CartReducer;