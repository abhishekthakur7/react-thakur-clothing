import React from 'react';

import { Route } from 'react-router-dom';

import CollectionOverview from '../collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import WithSpinner from '../with-spinner/with-spinner.component';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return ( //Route component in App.js will pass three props i.e. match, history & location
            <div className='shop-page'>
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={props => 
                                <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={props => 
                                <CollectionPageWithSpinner isLoading={loading} {...props} />}  />
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);