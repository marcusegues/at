import { CurrencyPair } from '../../reducers/currencyPairs/types';
import { RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS, REQUEST_FETCH_CURRENCY_PAIRS } from './index';

interface ReceiveSuccessCurrencyPairsActionType {
  type: typeof RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS;
  payload: { currencyPairs: CurrencyPair[] };
}

interface RequestFetchCurrencyPairsActionType {
  type: typeof REQUEST_FETCH_CURRENCY_PAIRS;
}

export type CurrencyPairsActionTypes =
  | ReceiveSuccessCurrencyPairsActionType
  | RequestFetchCurrencyPairsActionType;
