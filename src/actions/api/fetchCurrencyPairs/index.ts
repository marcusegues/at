import { IsRequestingFetchCurrencyPairsActionType, ReceiveErrorFetchCurrencyPairsActionType } from './types';

export const IS_REQUESTING_FETCH_CURRENCY_PAIRS = 'IS_REQUESTING_FETCH_CURRENCY_PAIRS';
export const RECEIVE_ERROR_FETCH_CURRENCY_PAIRS = 'RECEIVE_ERROR_FETCH_CURRENCY_PAIRS';

export const isRequestingFetchCurrencyPairs = (payload: {
  isRequesting: boolean;
}): IsRequestingFetchCurrencyPairsActionType => ({
  type: IS_REQUESTING_FETCH_CURRENCY_PAIRS,
  payload,
});

export const receiveErrorFetchCurrencyPairs = (payload: {
  error: string;
}): ReceiveErrorFetchCurrencyPairsActionType => ({
  type: RECEIVE_ERROR_FETCH_CURRENCY_PAIRS,
  payload,
  error: true,
});
