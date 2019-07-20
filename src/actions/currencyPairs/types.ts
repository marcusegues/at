export const RECEIVE_SUCCESS_CURRENCY_PAIRS = 'RECEIVE_SUCCESS_CURRENCY_PAIRS';

interface ReceiveSuccessCurrencyPairsAction {
  type: typeof RECEIVE_SUCCESS_CURRENCY_PAIRS;
  payload: string;
}

export type CurrencyPairsActionTypes = ReceiveSuccessCurrencyPairsAction;
