import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100; //For stripe API, price should be in cents not in dollars
    const publishableKey = 'pk_test_qKDpHq6AI9Esy3UBpfCA1dxk00WJIwSZLY';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    };

    return (
        <StripeCheckout    //Documentation at https://github.com/azmenak/react-stripe-checkout
            label='Pay Now'
            name='Thakur clothing Ltd.'
            description={`Your total is $${price}`}
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            amount= { priceForStripe }
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
};

export default StripeCheckoutButton;