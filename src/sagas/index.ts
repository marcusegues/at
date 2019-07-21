import { all, takeEvery, takeLatest } from 'redux-saga/effects';
import { REQUEST_FETCH_CURRENCY_PAIRS } from '../actions/currencyPairs';
import { REQUEST_FETCH_ORDERS } from '../actions/orders';
import { fetchCurrencyPairsSaga } from './currencyPairs';
import { fetchOrdersLocalStorageSaga } from './orders';

function* watchSupplierOrdersSagas() {
  yield takeLatest(REQUEST_FETCH_CURRENCY_PAIRS, fetchCurrencyPairsSaga);
  yield takeEvery(REQUEST_FETCH_ORDERS, fetchOrdersLocalStorageSaga);
}

export default function* rootSaga() {
  yield all([watchSupplierOrdersSagas()]);
}
