import { createSelector, Selector } from 'reselect';
import { ByIdState, CurrencyPair, CurrencyPairsState } from './types';

const getAllIds: Selector<CurrencyPairsState, string[]> = (state: CurrencyPairsState): string[] =>
  state.allIds;

const getById: Selector<CurrencyPairsState, ByIdState> = (state: CurrencyPairsState): ByIdState => state.byId;

export const getCurrencyPairs = createSelector<CurrencyPairsState, string[], ByIdState, CurrencyPair[]>(
  [getAllIds, getById],
  (allIds: string[], byId: ByIdState): CurrencyPair[] => allIds.map(id => byId[id])
);
