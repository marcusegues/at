import { NewOrderState } from '../../components/OrdersTable/OrdersTableContainer';
import { Order } from '../../reducers/orders/types';
import {
  RECEIVE_SUCCESS_FETCH_ORDERS,
  RECEIVE_SUCCESS_SUBMIT_NEW_ORDER,
  REQUEST_FETCH_ORDERS,
  REQUEST_SUBMIT_NEW_ORDER,
} from './index';

export interface RequestFetchOrdersActionType {
  type: typeof REQUEST_FETCH_ORDERS;
}

export interface ReceiveSuccessFetchOrdersActionType {
  type: typeof RECEIVE_SUCCESS_FETCH_ORDERS;
  payload: { orders: Order[] };
}

export interface RequestSubmitNewOrderActionType {
  type: typeof REQUEST_SUBMIT_NEW_ORDER;
  payload: { order: NewOrderState };
}

export interface ReceiveSuccessSubmitNewOrder {
  type: typeof RECEIVE_SUCCESS_SUBMIT_NEW_ORDER;
  payload: { order: Order };
}

export type OrdersActionTypes =
  | RequestFetchOrdersActionType
  | ReceiveSuccessFetchOrdersActionType
  | RequestSubmitNewOrderActionType
  | ReceiveSuccessSubmitNewOrder;
