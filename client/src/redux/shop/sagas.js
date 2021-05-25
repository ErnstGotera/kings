import { takeLatest, call, put, all } from 'redux-saga/effects';
import shopActionsType from './types';
import { fetchProductsSuccess, fetchProductsFailure } from './actions';

export const api = (pageNumber = '1') =>
  fetch(`http://localhost:4000/api/products?pageNumber=${pageNumber}`).then(
    (response) => response.json()
  );

export function* fetchProductsAsync() {
  try {
    const data = yield call(api);
    yield put(fetchProductsSuccess(data));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

export function* fetchProductsStart() {
  yield takeLatest(shopActionsType.FETCH_PRODUCTS_START, fetchProductsAsync);
}

export function* shopSagas() {
  yield all([call(fetchProductsStart)]);
}
