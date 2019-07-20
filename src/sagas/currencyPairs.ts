import { requestGetCurrencyPairs } from '../api/currencyPairs';
import { call, put } from 'redux-saga/effects';

export function* fetchCurrencyPairsSaga() {
  try {
    const currencyPairs = yield call(requestGetCurrencyPairs);
    yield put({
      type: 'RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS',
      payload: { currencyPairs },
      error: false,
    });
  } catch (error) {
    console.log('ERRROR', error.statusCode);
    // yield put({ type: 'RECEIVE_ERROR_FETCH_SUPPLIER_ORDERS', error: error.message });
  }
}
