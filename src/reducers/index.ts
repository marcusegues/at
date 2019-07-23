import { combineReducers } from 'redux';
import { currencyPairs } from './currencyPairs';
import { orders } from './orders';
import { RootState } from './types';
import { api } from './api';

export const root = combineReducers<RootState>({ api, currencyPairs, orders });
