import { combineReducers } from 'redux';
import { currencyPairs } from './currencyPairs';
import { RootState } from './types';

export const root = combineReducers<RootState>({ currencyPairs });
