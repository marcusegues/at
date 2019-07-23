import { createSelector, Selector } from 'reselect';
import { CurrencyPair, CurrencyPairsByIdState, CurrencyPairsState } from './types';

const getAllIds: Selector<CurrencyPairsState, string[]> = (state: CurrencyPairsState): string[] =>
  state.allIds;

const getById: Selector<CurrencyPairsState, CurrencyPairsByIdState> = (
  state: CurrencyPairsState
): CurrencyPairsByIdState => state.byId;

export const getCurrencyPairsSelector = createSelector<
  CurrencyPairsState,
  string[],
  CurrencyPairsByIdState,
  CurrencyPair[]
>(
  [getAllIds, getById],
  (allIds: string[], byId: CurrencyPairsByIdState): CurrencyPair[] => allIds.map(id => byId[id])
);
