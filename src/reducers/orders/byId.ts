import produce from 'immer';
import { RECEIVE_SUCCESS_FETCH_ORDERS, RECEIVE_SUCCESS_SUBMIT_NEW_ORDER } from '../../actions/orders';
import { OrdersActionTypes } from '../../actions/orders/types';
import { ByIdState } from './types';

export const byId = (state: ByIdState = {}, action: OrdersActionTypes): ByIdState =>
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_SUCCESS_FETCH_ORDERS: {
        const { orders } = action.payload;
        orders.forEach((or: any) => (draft[or.id] = or));
        return draft;
      }
      case RECEIVE_SUCCESS_SUBMIT_NEW_ORDER: {
        const { order } = action.payload;
        draft[order.id] = order;
        return draft;
      }
    }
  });
