import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop/sagas';

export default function* rootSaga() {
  yield all([call(shopSagas)]);
}
