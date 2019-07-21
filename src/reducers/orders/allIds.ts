import produce from 'immer';
import { RECEIVE_SUCCESS_FETCH_ORDERS } from '../../actions/orders';
import { OrdersActionTypes } from '../../actions/orders/types';
import { Order } from './types';

export const allIds = (state: string[] = [], action: OrdersActionTypes): string[] =>
  produce(state, () => {
    switch (action.type) {
      case RECEIVE_SUCCESS_FETCH_ORDERS: {
        return action.payload.orders.map((or: Order) => or.id);
      }
    }
  });
