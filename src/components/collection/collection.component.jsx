import React from 'react';
import { CollectionPageContainer, TitleContainer, ItemsContainer } from './collection.styles';

import CollectionItem from '../collection-item/collection-item.component';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';

const CollectionPage = ({ match, collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <TitleContainer> {title} </TitleContainer>
            <ItemsContainer>
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </ItemsContainer>
        </CollectionPageContainer>
    )
};


const mapStateToProps = (state, ownProps) => ({   //mapStateToProps can accept two params, ownProps is current component's props
    collection: selectCollection(ownProps.match.params.collectionId)(state) //here two params are passed because this selector needs a part of the state depending upon the url param
});

export default connect(mapStateToProps)(CollectionPage);