import { CurrencyPair } from '../../reducers/currencyPairs/types';
import { ReceiveSuccessFetchCurrencyPairsActionType, RequestFetchCurrencyPairsActionType } from './types';

export const FETCH_CURRENCY_PAIRS = 'FETCH_CURRENCY_PAIRS';

export const REQUEST_FETCH_CURRENCY_PAIRS = 'REQUEST_FETCH_CURRENCY_PAIRS';

export const RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS = 'RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS';

export const requestFetchCurrencyPairsAction = (): RequestFetchCurrencyPairsActionType => ({
  type: REQUEST_FETCH_CURRENCY_PAIRS,
});

export const receiveSuccessFetchCurrencyPairsAction = (payload: {
  currencyPairs: CurrencyPair[];
}): ReceiveSuccessFetchCurrencyPairsActionType => ({
  type: RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS,
  payload,
});
