import { all, takeEvery, takeLatest } from 'redux-saga/effects';
import { REQUEST_FETCH_CURRENCY_PAIRS } from '../actions/currencyPairs';
import { REQUEST_FETCH_ORDERS, REQUEST_SUBMIT_NEW_ORDER } from '../actions/orders';
import { fetchCurrencyPairsSaga } from './currencyPairs';
import { fetchOrdersLocalStorageSaga, submitNewOrderSaga } from './orders/orders';

function* watchSupplierOrdersSagas() {
  yield takeLatest(REQUEST_FETCH_CURRENCY_PAIRS, fetchCurrencyPairsSaga);
  yield takeEvery(REQUEST_FETCH_ORDERS, fetchOrdersLocalStorageSaga);
  yield takeEvery(REQUEST_SUBMIT_NEW_ORDER, submitNewOrderSaga);
}

export default function* rootSaga() {
  yield all([watchSupplierOrdersSagas()]);
}
