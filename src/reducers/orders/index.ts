import { combineReducers } from 'redux';
import { allIds } from './allIds';
import { byId } from './byId';
import { OrdersState } from './types';

export const orders = combineReducers<OrdersState>({ byId, allIds });
