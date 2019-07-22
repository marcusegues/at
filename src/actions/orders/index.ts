import { NewOrderState } from '../../components/OrdersTable/OrdersTableContainer';
import { Order } from '../../reducers/orders/types';
import {
  ReceiveSuccessFetchOrdersActionType,
  ReceiveSuccessSubmitNewOrder,
  RequestFetchOrdersActionType,
  RequestSubmitNewOrderActionType,
} from './types';

export const REQUEST_FETCH_ORDERS = 'REQUEST_FETCH_ORDERS';

export const RECEIVE_SUCCESS_FETCH_ORDERS = 'RECEIVE_SUCCESS_FETCH_ORDERS';

export const REQUEST_SUBMIT_NEW_ORDER = 'REQUEST_SUBMIT_NEW_ORDER';

export const RECEIVE_SUCCESS_SUBMIT_NEW_ORDER = 'RECEIVE_SUCCESS_SUBMIT_NEW_ORDER';

export const requestFetchOrdersAction = (): RequestFetchOrdersActionType => ({
  type: REQUEST_FETCH_ORDERS,
});

export const receiveSuccessFetchOrdersAction = (payload: {
  orders: Order[];
}): ReceiveSuccessFetchOrdersActionType => ({
  type: RECEIVE_SUCCESS_FETCH_ORDERS,
  payload,
});

export const requestSubmitNewOrderAction = (payload: {
  order: NewOrderState;
}): RequestSubmitNewOrderActionType => ({
  type: REQUEST_SUBMIT_NEW_ORDER,
  payload,
});

export const receiveSuccessSubmitNewOrderAction = (payload: {
  order: Order;
}): ReceiveSuccessSubmitNewOrder => ({
  type: RECEIVE_SUCCESS_SUBMIT_NEW_ORDER,
  payload,
});
