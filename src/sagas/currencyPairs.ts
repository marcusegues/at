import { call, put } from 'redux-saga/effects';
import { receiveSuccessFetchCurrencyPairsAction } from '../actions/currencyPairs';
import { requestGetCurrencyPairs } from '../api/currencyPairs/index';

export function* fetchCurrencyPairsSaga() {
  try {
    const currencyPairs = yield call(requestGetCurrencyPairs);
    yield put(receiveSuccessFetchCurrencyPairsAction({ currencyPairs }));
  } catch (error) {
    console.log('ERRROR', error.statusCode);
    // yield put({ type: 'RECEIVE_ERROR_FETCH_SUPPLIER_ORDERS', error: error.message });
  }
}
