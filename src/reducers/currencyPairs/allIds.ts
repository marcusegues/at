import produce from 'immer';
import { RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS } from '../../actions/currencyPairs';
import { CurrencyPairsActionTypes } from '../../actions/currencyPairs/types';
import { CurrencyPair } from './types';

export const allIds = (state: string[] = [], action: CurrencyPairsActionTypes): string[] =>
  produce(state, () => {
    switch (action.type) {
      case RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS: {
        return action.payload.currencyPairs.map((cp: CurrencyPair) => cp.pair);
      }
    }
  });
