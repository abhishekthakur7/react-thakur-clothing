import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux'; //Provider is the component which will pass the store down to child components
import {store, persistor} from './redux/store';
import registerServiceWorker from './registerServiceWorker';

import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

registerServiceWorker();