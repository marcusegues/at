import { ByIdState } from './types';
import produce from 'immer';
import { CurrencyPairsActionTypes } from '../../actions/currencyPairs/types';
import { RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS } from '../../actions/currencyPairs';

export const byId = (state: ByIdState = {}, action: CurrencyPairsActionTypes): ByIdState =>
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS: {
        const { currencyPairs } = action.payload;
        currencyPairs.forEach((cp: any) => (draft[cp.pair] = cp));
      }
    }
  });
