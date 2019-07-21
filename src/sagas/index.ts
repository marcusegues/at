import { all, takeLatest } from 'redux-saga/effects';
import { REQUEST_FETCH_CURRENCY_PAIRS } from '../actions/currencyPairs';
import { fetchCurrencyPairsSaga } from './currencyPairs';

function* watchSupplierOrdersSagas() {
  yield takeLatest(REQUEST_FETCH_CURRENCY_PAIRS, fetchCurrencyPairsSaga);
}

export default function* rootSaga() {
  yield all([watchSupplierOrdersSagas()]);
}
