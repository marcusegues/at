import { combineReducers } from 'redux';
import { RootState } from './types';
import { currencyPairs } from './currencyPairs';

export const root = combineReducers<RootState>({ currencyPairs });
