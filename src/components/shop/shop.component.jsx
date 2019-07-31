import React from 'react';
import './shop.styles.scss';

import CollectionOverview from '../collections-overview/collections-overview.component';


const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        <CollectionOverview />
    </div>
);

export default ShopPage;