import CartActionTypes from './cart.action.types';

const INITIAL_VALUE= {
    hidden: true
};

const CartReducer = (prevState = INITIAL_VALUE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...prevState,
                hidden : !prevState.hidden
            }
        default:
            return prevState;
    }
}

export default CartReducer;