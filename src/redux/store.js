import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';

import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];

if(process.env.NODE_ENV === 'development') { //inbuilt support to check NODE_ENV
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); //persisted version of our store, enables to store state in localStorage