import { requestGetCurrencyPairs } from '../api/currencyPairs/index';
import { call, put } from 'redux-saga/effects';
import { RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS } from '../actions/currencyPairs';

export function* fetchCurrencyPairsSaga() {
  try {
    const currencyPairs = yield call(requestGetCurrencyPairs);
    yield put({
      type: RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS,
      payload: { currencyPairs },
    });
  } catch (error) {
    console.log('ERRROR', error.statusCode);
    // yield put({ type: 'RECEIVE_ERROR_FETCH_SUPPLIER_ORDERS', error: error.message });
  }
}
