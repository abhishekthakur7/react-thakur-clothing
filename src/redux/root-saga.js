import { all, call } from 'redux-saga/effects';
import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import {cartSagas } from './cart/cart.sagas';

export default function* rootSaga() {
    yield all([    //"all" will execute all sagas concurrently instead of waiting for the yield of each saga
        call(shopSagas),
        call(userSagas),
        call(cartSagas)
    ])
}