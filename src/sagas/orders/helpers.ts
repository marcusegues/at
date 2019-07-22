import { v4 } from 'uuid';
import { NewOrderState } from '../../components/OrdersTable/OrdersTableContainer';
import { Order } from '../../reducers/orders/types';

export const addIdToOrder = (order: Omit<NewOrderState, 'id'>): Order =>
  ({
    ...order,
    id: v4(),
  } as Order);
