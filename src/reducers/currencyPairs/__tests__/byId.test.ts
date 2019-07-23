import produce from 'immer';
import { receiveSuccessFetchCurrencyPairsAction } from '../../../actions/currencyPairs';
import { currencyPairsFixture } from '../../../tests/fixtures/fixtures';
import { byId } from '../byId';
import { CurrencyPairsByIdState } from '../types';

describe('Currency pairs byId reducer', () => {
  test('should return the initial state', () => {
    // @ts-ignore
    expect(byId(undefined, {})).toEqual({});
  });

  test('should handle RECEIVE_SUCCESS_FETCH_CURRENCY_PAIRS', () => {
    const currencyPairs = currencyPairsFixture();
    expect(byId({}, receiveSuccessFetchCurrencyPairsAction({ currencyPairs }))).toEqual(
      produce({} as CurrencyPairsByIdState, draft => {
        currencyPairs.forEach(cp => (draft[cp.pair] = cp));
      })
    );
  });
});
