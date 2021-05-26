import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import shopActionsType from './types';
import { fetchProductsSuccess, fetchProductsFailure } from './actions';
import { getPage } from './selectors';

export const api = (pageNumber = 1) =>
  fetch(`http://localhost:4000/api/products?pageNumber=${pageNumber}`).then(
    (response) => response.json()
  );

export function* fetchProductsAsync() {
  try {
    const pageNumber = yield select(getPage);
    const data = yield call(api, pageNumber);
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
