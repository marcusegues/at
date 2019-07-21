import { combineReducers } from 'redux';
import { currencyPairs } from './currencyPairs';
import { orders } from './orders';
import { RootState } from './types';

export const root = combineReducers<RootState>({ currencyPairs, orders });
