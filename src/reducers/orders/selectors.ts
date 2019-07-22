import { createSelector, Selector } from 'reselect';
import { ByIdState, Order, OrdersState } from './types';

const getAllIds: Selector<OrdersState, string[]> = (state: OrdersState): string[] => state.allIds;

const getById: Selector<OrdersState, ByIdState> = (state: OrdersState): ByIdState => state.byId;

export const getOrdersSelector = createSelector<OrdersState, string[], ByIdState, Order[]>(
  [getAllIds, getById],
  (allIds: string[], byId: ByIdState): Order[] => {
    return allIds.map(id => byId[id]);
  }
);
