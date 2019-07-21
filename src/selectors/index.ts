import { Order } from '../reducers/orders/types';
import { RootState } from '../reducers/types';
import * as ordersSelectors from './orders';

export const getOrdersSelector = (state: RootState): Order[] => ordersSelectors.getOrders(state.orders);
