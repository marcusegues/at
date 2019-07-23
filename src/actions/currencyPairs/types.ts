import { CurrencyPairDto } from '../../api/currencyPairs/types';
import { RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS, REQUEST_FETCH_CURRENCY_PAIRS } from './index';

interface ReceiveSuccessFetchCurrencyPairsActionType {
  type: typeof RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS;
  payload: { currencyPairs: CurrencyPairDto[] };
}

interface RequestFetchCurrencyPairsActionType {
  type: typeof REQUEST_FETCH_CURRENCY_PAIRS;
}

export type CurrencyPairsActionTypes =
  | ReceiveSuccessFetchCurrencyPairsActionType
  | RequestFetchCurrencyPairsActionType;
