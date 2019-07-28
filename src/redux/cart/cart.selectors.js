import {createSelector} from 'reselect';

const selectCart = state => state.cartDropdown; //Input selector

export const selectCartItems = createSelector( //Output selector, requires createSelector and input selector
  [selectCart],
  (cartDropdown) => cartDropdown.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuant, cartItem) => accumulatedQuant + cartItem.quantity, 0)
);