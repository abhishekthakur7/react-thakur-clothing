//method to add items to cart
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCart = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    if (existingCart) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};

//method to remove item from cart, also existing item count shouldn't be less than 1
export const removeItemsFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if(existingCartItem.quantity === 1) { //If quantity is 1, remove item the list
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    } else { //If quantity is more than 1, subtract one more existing quantity of item
        return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? 
                {...cartItem, quantity: cartItem.quantity - 1} : 
                cartItem
            )
    }
};