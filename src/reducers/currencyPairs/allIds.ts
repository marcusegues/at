import produce from 'immer';
import { RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS } from '../../actions/currencyPairs';
import { CurrencyPairsActionTypes } from '../../actions/currencyPairs/types';
import { CurrencyPairDto } from '../../api/currencyPairs/types';

export const allIds = (state: string[] = [], action: CurrencyPairsActionTypes): string[] =>
  produce(state, () => {
    switch (action.type) {
      case RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS: {
        return action.payload.currencyPairs.map((cp: CurrencyPairDto) => cp.pair);
      }
    }
  });
