import produce from 'immer';
import { RECEIVE_SUCCESS_FETCH_ORDERS, RECEIVE_SUCCESS_SUBMIT_NEW_ORDER } from '../../actions/orders';
import { OrdersActionTypes } from '../../actions/orders/types';
import { Order } from './types';

export const allIds = (state: string[] = [], action: OrdersActionTypes): string[] =>
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_SUCCESS_FETCH_ORDERS: {
        return action.payload.orders.map((or: Order) => or.id);
      }
      case RECEIVE_SUCCESS_SUBMIT_NEW_ORDER: {
        draft.push(action.payload.order.id);
        return draft;
      }
    }
  });
