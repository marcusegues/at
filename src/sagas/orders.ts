import { call, put, select } from 'redux-saga/effects';
import { v4 } from 'uuid';
import { RECEIVE_SUCCESS_FETCH_ORDERS, RECEIVE_SUCCESS_SUBMIT_NEW_ORDER } from '../actions/orders';
import { RequestNewOrderActionType } from '../actions/orders/types';
import { fetchOrdersLocalStorage, storeOrdersLocalStorage } from '../localStorage';
import { Order, OrderType } from '../reducers/orders/types';
import { getOrdersSelector } from '../reducers/selectors';

export function* fetchOrdersLocalStorageSaga() {
  try {
    const orders = yield call(fetchOrdersLocalStorage);
    yield put({
      type: RECEIVE_SUCCESS_FETCH_ORDERS,
      payload: { orders },
    });
  } catch (error) {
    console.log('ERRROR', error.statusCode);
    // yield put({ type: 'RECEIVE_ERROR_FETCH_SUPPLIER_ORDERS', error: error.message });
  }
}

export function* submitNewOrder({ payload: { order } }: RequestNewOrderActionType) {
  try {
    // normally we would post the new order to the backend here
    const { pair, side, type, quantity, limit } = order;
    if (
      (pair && side && type === OrderType.Market && quantity) ||
      (pair && side && type === OrderType.Limit && limit && quantity)
    ) {
      const newOrder = { ...order, id: v4() } as Order;

      // save to redux
      yield put({
        type: RECEIVE_SUCCESS_SUBMIT_NEW_ORDER,
        payload: { order: newOrder },
      });

      // save to localStorage
      const orders = yield select(getOrdersSelector);
      storeOrdersLocalStorage(orders);
    }
  } catch (error) {
    console.log('ERRROR', error);
    // yield put({ type: 'RECEIVE_ERROR_FETCH_SUPPLIER_ORDERS', error: error.message });
  }
}
