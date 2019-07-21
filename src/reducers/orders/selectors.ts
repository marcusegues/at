import { Order, OrdersState } from './types';

export const getOrders = (state: OrdersState): Order[] => state.allIds.map(id => state.byId[id]);
