import { Order, OrdersState } from '../reducers/orders/types';

export const getOrders = (state: OrdersState): Order[] => state.allIds.map(id => state.byId[id]);
