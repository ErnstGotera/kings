import shopActionsType from './types';

export const fetchProductsStart = (pageNumber) => ({
  type: shopActionsType.FETCH_PRODUCTS_START,
  payload: pageNumber,
});

export const fetchProductsSuccess = (data) => ({
  type: shopActionsType.FETCH_PRODUCTS_SUCCESS,
  payload: data,
});

export const fetchProductsFailure = (errorMessage) => ({
  type: shopActionsType.FETCH_PRODUCTS_FAILURE,
  payload: errorMessage,
});
