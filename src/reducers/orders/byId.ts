import produce from 'immer';
import { ByIdState, OrderSide, OrderType } from './types';
import { RECEIVE_SUCCESS_FETCH_ORDERS } from '../../actions/orders';
import { OrdersActionTypes } from '../../actions/orders/types';

export const byId = (
  state: ByIdState = {
    id1: { id: 'id1', pair: 'ltcusd', side: OrderSide.Buy, type: OrderType.Market, quantity: 100 },
  },
  action: OrdersActionTypes
): ByIdState =>
  produce(state, draft => {
    switch (action.type) {
      case RECEIVE_SUCCESS_FETCH_ORDERS: {
        const { orders } = action.payload;
        orders.forEach((or: any) => (draft[or.id] = or));
      }
    }
  });
