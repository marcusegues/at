import { ByIdState, Order, OrdersState } from './types';
import { createSelector, Selector } from 'reselect';

const getAllIds: Selector<OrdersState, string[]> = (state: OrdersState): string[] => state.allIds;

const getById: Selector<OrdersState, ByIdState> = (state: OrdersState): ByIdState => state.byId;

export const getOrders = createSelector<OrdersState, string[], ByIdState, Order[]>(
  [getAllIds, getById],
  (allIds: string[], byId: ByIdState): Order[] => allIds.map(id => byId[id])
);
