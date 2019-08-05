import React from 'react';
import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    TestWarningContainer
} from './checkout.styles';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../checkout-item/checkout-item.component';
import StripeCheckoutButton from '../stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, totalPrice }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(item => (
                <CheckoutItem key={item.id} cartItem={item} /> //Render each cartItem using CheckoutItem component
            ))
        }
        <TotalContainer>
            <span>Total: ${totalPrice}</span>
        </TotalContainer>
        <TestWarningContainer>
            *Please use the following test credit card for payment*
            <br />
            424242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </TestWarningContainer>
        <StripeCheckoutButton price={totalPrice} />
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotal
});

export default connect(mapStateToProps, null)(CheckoutPage);