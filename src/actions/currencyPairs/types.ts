import { CurrencyPair } from '../../reducers/currencyPairs/types';
import { RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS, REQUEST_FETCH_CURRENCY_PAIRS } from './index';

export interface RequestFetchCurrencyPairsActionType {
  type: typeof REQUEST_FETCH_CURRENCY_PAIRS;
}

export interface ReceiveSuccessFetchCurrencyPairsActionType {
  type: typeof RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS;
  payload: { currencyPairs: CurrencyPair[] };
}

export type CurrencyPairsActionTypes =
  | ReceiveSuccessFetchCurrencyPairsActionType
  | RequestFetchCurrencyPairsActionType;
