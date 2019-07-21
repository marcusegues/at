import { RootState } from '../reducers/types';
import * as ordersSelectors from './orders';
import { Order } from '../reducers/orders/types';

export const getOrdersSelector = (state: RootState): Order[] => ordersSelectors.getOrders(state.orders);
