import {createSelector} from 'reselect';

const selectCart = state => state.cartDropdown; //Input selector

export const selectCartItems = createSelector( //Output selector, requires createSelector and input selector
  [selectCart],
  (cartDropdown) => cartDropdown.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cartDropdown => cartDropdown.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuant, cartItem) => accumulatedQuant + cartItem.quantity, 0)
);

//This output selector will return total price for all items added in cart
export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedQuant, cartItem) => accumulatedQuant + cartItem.quantity * cartItem.price, 0)
)