import { call, put } from 'redux-saga/effects';
import { receiveSuccessFetchCurrencyPairsAction } from '../actions/currencyPairs';
import { requestGetCurrencyPairs } from '../api/currencyPairs/index';
import {
  isRequestingFetchCurrencyPairs,
  receiveErrorFetchCurrencyPairs,
} from '../actions/api/fetchCurrencyPairs';

export function* fetchCurrencyPairsSaga() {
  try {
    yield put(isRequestingFetchCurrencyPairs({ isRequesting: true }));
    const currencyPairs = yield call(requestGetCurrencyPairs);
    yield put(receiveSuccessFetchCurrencyPairsAction({ currencyPairs }));
  } catch (error) {
    yield put(receiveErrorFetchCurrencyPairs({ error: error.statusCode }));
  } finally {
    yield put(isRequestingFetchCurrencyPairs({ isRequesting: false }));
  }
}
