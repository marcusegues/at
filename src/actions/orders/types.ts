import { Order } from '../../reducers/orders/types';
import { RECEIVE_SUCCESS_FETCH_ORDERS } from './index';

interface ReceiveSuccessCurrencyPairsActionType {
  type: typeof RECEIVE_SUCCESS_FETCH_ORDERS;
  payload: { orders: Order[] };
}

export type OrdersActionTypes = ReceiveSuccessCurrencyPairsActionType;
