import { Order } from '../../reducers/orders/types';
import { RECEIVE_SUCCESS_FETCH_ORDERS, REQUEST_FETCH_ORDERS, REQUEST_NEW_ORDER } from './index';

interface RequestFetchOrdersActionType {
  type: typeof REQUEST_FETCH_ORDERS;
}

interface ReceiveSuccessFetchOrdersActionType {
  type: typeof RECEIVE_SUCCESS_FETCH_ORDERS;
  payload: { orders: Order[] };
}

interface RequestNewOrderActionType {
  type: typeof REQUEST_NEW_ORDER;
  payload: { order: Order };
}

export type OrdersActionTypes =
  | RequestFetchOrdersActionType
  | ReceiveSuccessFetchOrdersActionType
  | RequestNewOrderActionType;
