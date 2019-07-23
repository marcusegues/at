import produce from 'immer';
import { RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS } from '../../actions/currencyPairs';
import { CurrencyPairsActionTypes } from '../../actions/currencyPairs/types';
import { ByIdState } from './types';

export const byId = (state: ByIdState = {}, action: CurrencyPairsActionTypes): ByIdState =>
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS: {
        const { currencyPairs } = action.payload;
        currencyPairs.forEach(
          (cp: any) =>
            (draft[cp.pair] = {
              ...cp,
              minimumOrderSize: parseInt(cp.minimumOrderSize, 10),
              maximumOrderSize: parseInt(cp.maximumOrderSize, 10),
            })
        );
      }
    }
  });
