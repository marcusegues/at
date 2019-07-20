import { takeLatest, all } from 'redux-saga/effects';
import { fetchCurrencyPairsSaga } from './currencyPairs';

function* watchSupplierOrdersSagas() {
  yield takeLatest('REQUEST_FETCH_CURRENCY_PAIRS', fetchCurrencyPairsSaga);
}

export default function* rootSaga() {
  yield all([watchSupplierOrdersSagas()]);
}
