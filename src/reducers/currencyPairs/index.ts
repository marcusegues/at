import { combineReducers } from 'redux';
import { allIds } from './allIds';
import { byId } from './byId';
import { CurrencyPairsState } from './types';

export const currencyPairs = combineReducers<CurrencyPairsState>({ byId, allIds });
