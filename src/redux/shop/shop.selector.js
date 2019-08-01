import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections 
);

export const selectCollectionsForPreview = createSelector(  //convert collections object to array
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => createSelector( //select a single collectoion (hats/sneakers etc. from collections object)
  [selectCollections],
  collections => collections[collectionUrlParam]);