import React from 'react';
import './collection.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';

const CollectionPage = ({ match, collection }) => {
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'> {title} </h2>
            <div className='items'>
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
    )
};


const mapStateToProps = (state, ownProps) => ({   //mapStateToProps can accept two params, ownProps is current component's props
    collection: selectCollection(ownProps.match.params.collectionId)(state) //here two params are passed because this selector needs a part of the state depending upon the url param
});

export default connect(mapStateToProps)(CollectionPage);