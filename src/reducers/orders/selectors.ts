import { createSelector, Selector } from 'reselect';
import { Order, OrdersByIdState, OrdersState } from './types';

const getAllIds: Selector<OrdersState, string[]> = (state: OrdersState): string[] => state.allIds;

const getById: Selector<OrdersState, OrdersByIdState> = (state: OrdersState): OrdersByIdState => state.byId;

export const getOrdersSelector = createSelector<OrdersState, string[], OrdersByIdState, Order[]>(
  [getAllIds, getById],
  (allIds: string[], byId: OrdersByIdState): Order[] => {
    return allIds.map(id => byId[id]);
  }
);
