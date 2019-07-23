import { IS_REQUESTING_FETCH_CURRENCY_PAIRS, RECEIVE_ERROR_FETCH_CURRENCY_PAIRS } from './index';

export interface IsRequestingFetchCurrencyPairsActionType {
  type: typeof IS_REQUESTING_FETCH_CURRENCY_PAIRS;
  payload: { isRequesting: boolean };
}

export interface ReceiveErrorFetchCurrencyPairsActionType {
  type: typeof RECEIVE_ERROR_FETCH_CURRENCY_PAIRS;
  payload: { error: string };
  error: true;
}

export type ApiIsRequestingActionType = IsRequestingFetchCurrencyPairsActionType;
export type ApiReceiveErrorActionType = ReceiveErrorFetchCurrencyPairsActionType;
export type ApiActionType = ApiIsRequestingActionType | ApiReceiveErrorActionType;
