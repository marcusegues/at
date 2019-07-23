import produce from 'immer';
import { RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS } from '../../actions/currencyPairs';
import { CurrencyPairsActionTypes } from '../../actions/currencyPairs/types';
import { CurrencyPairsByIdState } from './types';

export const byId = (
  state: CurrencyPairsByIdState = {},
  action: CurrencyPairsActionTypes
): CurrencyPairsByIdState =>
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS: {
        const { currencyPairs } = action.payload;
        currencyPairs.forEach(
          (cp: any) =>
            (draft[cp.pair] = {
              ...cp,
            })
        );
      }
    }
  });
