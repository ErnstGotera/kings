import shopActionsType from './types';

const INITIAL_STATE = {
  pages: null,
  products: null,
  isFetching: true,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionsType.FETCH_PRODUCTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopActionsType.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pages: action.payload.pages,
        products: action.payload.products,
      };
    case shopActionsType.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
