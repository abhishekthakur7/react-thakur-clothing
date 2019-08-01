import React from 'react';
import './shop.styles.scss';

import { Route } from 'react-router-dom';

import CollectionOverview from '../collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
    console.log(match);
    return ( //Route component in App.js will pass three props i.e. match, history & location
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
};

export default ShopPage;