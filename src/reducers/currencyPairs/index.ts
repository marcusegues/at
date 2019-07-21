import { combineReducers } from 'redux';
import { byId } from './byId';
import { allIds } from './allIds';
import { CurrencyPairsState } from './types';

export const currencyPairs = combineReducers<CurrencyPairsState>({ byId, allIds });
