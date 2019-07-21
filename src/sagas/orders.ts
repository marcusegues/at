import { call, put } from 'redux-saga/effects';
import { RECEIVE_SUCCESS_FETCH_ORDERS } from '../actions/orders';

export function* fetchOrdersSaga() {
  try {
    const orders = localStorage.getItem('orders');
    yield put({
      type: RECEIVE_SUCCESS_FETCH_ORDERS,
      payload: { orders },
    });
  } catch (error) {
    console.log('ERRROR', error.statusCode);
    // yield put({ type: 'RECEIVE_ERROR_FETCH_SUPPLIER_ORDERS', error: error.message });
  }
}
